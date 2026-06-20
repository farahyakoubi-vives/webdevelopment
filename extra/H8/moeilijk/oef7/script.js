const knop = document.getElementById('toggleBtn');
const pagina = document.getElementById('pagina');
knop.addEventListener('click', () => {
    pagina.classList.toggle('dark-mode');
    if(pagina.classList.contains('dark-mode')){
        knop.innerText = 'light mode';
    }else {
        knop.innerText = 'dark mode';
    }
});