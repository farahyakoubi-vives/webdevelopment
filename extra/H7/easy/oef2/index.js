const setup = () => {
    const input = document.getElementById('naamVeld');
    input.addEventListener('input', groet);
};

const groet = () => {
    const input = document.getElementById('naamVeld');
    const groetP = document.getElementById('groet');
    groetP.textContent = "Hallo, " + input.value + " !";
}

window.addEventListener('load', setup);