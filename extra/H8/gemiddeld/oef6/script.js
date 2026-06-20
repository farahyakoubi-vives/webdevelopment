const gebruiker = document.getElementById('naamInput');
const tekst = document.getElementById('output');
gebruiker.addEventListener('input', () => {
    tekst.style.color = 'blue';
    tekst.innerText = gebruiker.value;
});