const setup = () => {

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
    })



}


window.addEventListener('load', setup);