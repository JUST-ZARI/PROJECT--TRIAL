const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function (){
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".expert-card");

    cards.forEach(card => {
        const name = card.querySelector(".expert-name").textContent.toLowerCase();
        const skill = card.querySelector(".expert-skill").textContent.toLowerCase();

        if (name.includes(query) || skill.includes(query)){
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});
