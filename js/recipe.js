const hide = document.querySelectorAll(".hide");
const show = document.querySelectorAll(".show");
const cont = document.querySelectorAll(".recipe-content");

hide.forEach((h, index) => {
    h.addEventListener("click",()=>{
        hideContent(index);
    });
});

show.forEach((s, index) => {
    s.classList.add("none");
    s.addEventListener("click",()=>{
        showContent(index);
    });
});

function hideContent(index){
    const text = cont[index];
    text.classList.add("none");

    hide[index].classList.add("none");
    show[index].classList.remove("none");
}

function showContent(index){
    const text = cont[index];
    text.classList.remove("none");
    
    hide[index].classList.remove("none");
    show[index].classList.add("none");
}