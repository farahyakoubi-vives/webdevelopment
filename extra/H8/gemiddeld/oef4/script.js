const knop = document.getElementById("darkBtn");
const pagina = document.getElementById("pagina");
knop.addEventListener('click', () => {
    pagina.classList.add("dark");
    pagina.classList.remove("light");
});
