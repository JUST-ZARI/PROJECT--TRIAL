const htransform=document.getElementById('web-name');
// Apply transformation automatically on page load
window.onload = () => {
    htransform.style.transition = "transform 0.3s ease"; // Smooth transition
    htransform.style.transform = "scale(1.1)"; // Slightly scale up
};
// Reset to original state after a delay (optional)
setTimeout(() => {
    htransform.style.transform = 'scale(1)'; // Return to original state after 1 second
}, 1200); // 4 second delay before resetting


const h2transformation=document.getElementsByTagName('h2');
 Array.from(h2transformation).forEach(h2transform =>{
    h2transform.addEventListener("mouseenter",() =>{
        h2transform.style.transition="transform 0.3s ease";
        // Ensure a smooth transition
        h2transform.style.transform="scale(1)";
        //ptransform.style.transform = "scale(1) 
    });

    h2transform.addEventListener('mouseleave', () => {
        // When the mouse leaves the card, scale it back to its original size (1)
        h2transform.style.transform = 'scale(0.9)';
    });
 });


 const h3transformation=document.getElementsByTagName('h3');
 Array.from(h3transformation).forEach(h3transform =>{
    h3transform.addEventListener("mouseenter",() =>{
        h3transform.style.transition="transform 0.3s ease";
        // Ensure a smooth transition
        h3transform.style.transform="scale(1)";
        //ptransform.style.transform = "scale(1) 
    });

    h3transform.addEventListener('mouseleave', () => {
        // When the mouse leaves the card, scale it back to its original size (1)
        h3transform.style.transform = 'scale(0.9)';
    });
 });


 document.addEventListener('DOMContentLoaded', function () {
    // Ensure Swiper library is loaded before initializing
    if (typeof Swiper !== "function") {
        console.error("Swiper library not loaded. Ensure you have included Swiper's JS and CSS files.");
        return;
    }

    const swiper = new Swiper('.swiper', {
        loop: true, // Infinite loop
        autoplay: {
            delay: 1000, // Auto-slide every 1 seconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
        },
        speed: 800, // Smooth transition speed
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Pause autoplay on hover
    const swiperContainer = document.querySelector('.swiper');
    if (swiperContainer) {
        swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.stop());
        swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.start());
    }
});
 
