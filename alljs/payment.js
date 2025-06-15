// JavaScript to handle dynamic data population
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    // Function to populate data
    function populateData(data) {
        // Set service and email from URL or fallback
        const service = data.serviceName || urlParams.get('service') || 'Service Name';
        const email = data.userEmail || urlParams.get('email') || 'User Email';
        const amountValue = data.amount || urlParams.get('amount') || 0;

        // Update page content
        document.getElementById('service-name').textContent = service;
        document.getElementById('user-email').textContent = email;
        document.getElementById('payment-amount').textContent = 'KES ' + parseFloat(amountValue).toLocaleString();
        document.getElementById('pay-button-amount').textContent = 'KES ' + parseFloat(amountValue).toLocaleString();
        document.getElementById('confirmation-email').textContent = email;
    }

    // Initialize data from URL parameters
    populateData({});

    // Form submission handler
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get phone number and validate
        const phoneNumber = document.getElementById('phone').value.trim();
        if (!phoneNumber.match(/^2547\d{8}$/)) {
            alert("Please enter a valid Kenyan phone number starting with 2547...");
            return;
        }

        // Show loading state
        document.getElementById('loadingIndicator').style.display = 'block';
        document.getElementById('payButton').disabled = true;

        // Get amount (remove KES and comma)
        const amount = document.getElementById('payment-amount').textContent.replace('KES ', '').replace(/,/g, '');

        // Prepare data for backend
        const requestData = {
            phone: phoneNumber,
            amount: amount,
            service: document.getElementById('service-name').textContent,
            email: document.getElementById('user-email').textContent
        };

        // Send STK Push request
        fetch('/api/stk/push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('loadingIndicator').style.display = 'none';

            if (data.success) {
                // Show success message
                document.getElementById('paymentForm').style.display = 'none';
                document.getElementById('confirmationMessage').style.display = 'block';
            } else {
                alert('Payment failed: ' + (data.message || 'Unknown error'));
                document.getElementById('payButton').disabled = false;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('loadingIndicator').style.display = 'none';
            document.getElementById('payButton').disabled = false;
            alert('An error occurred while processing your payment');
        });
    });
});