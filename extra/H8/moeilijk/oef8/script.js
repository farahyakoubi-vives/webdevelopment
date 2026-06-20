const kleur = document.getElementById('kleurInput');
const achtergrond = document.getElementById('kleurBox');

kleur.addEventListener('input', () => {

    achtergrond.style.backgroundColor = kleur.value;
});