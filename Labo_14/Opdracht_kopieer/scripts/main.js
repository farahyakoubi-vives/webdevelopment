
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;


    let output = document.getElementById("txtOutput");
    output.innerHTML = tekst;
}


function setup() {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}


document.addEventListener('DOMContentLoaded', setup);
