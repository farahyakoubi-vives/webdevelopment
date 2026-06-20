const gebruiker = document.getElementById('tekstInput');
const output = document.getElementById('output');
const resetknop = document.getElementById('resetBtn');
gebruiker.addEventListener('input', () => {
    output.innerText = gebruiker.value;
    if (gebruiker.value.length > 10){
        output.classList.add('te-lang');
    }else {
        output.classList.remove('te-lang');
    }
});

resetknop.addEventListener('click', () => {
gebruiker.value = "";
output.innerText = "";
output.classList.remove('te-lang');
});