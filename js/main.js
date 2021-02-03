const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("click",()=>{
        window.location.href = `http://localhost:5000/recipe/${index}`;
    });
});