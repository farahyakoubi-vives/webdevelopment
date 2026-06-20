const setup = () => {
    const myBtn = document.getElementById('myBtn');
    myBtn.addEventListener('click', change);
};
const change = () => {
    const boodschap = document.getElementById('boodschap');
    boodschap.textContent = 'Je hebt geklikt!';
};
window.addEventListener('load', setup);