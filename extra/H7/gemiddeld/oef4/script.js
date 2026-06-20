const setup = () => {
    const knop = document.getElementById("checkBtn");
    knop.addEventListener("click", controleer);

};


const controleer = () => {
    const  input = document.getElementById('getal');
    const resultaat = document.getElementById('resultaat');
    const waarde = input.value;
    if(waarde == ''){

        resultaat.textContent = 'Vul een getal in';

    }else if (Number(waarde) % 2 == 0){
        resultaat.textContent = "Het getal is even";
    }else {
        resultaat.textContent = "Het getal is oneven";
    }
};


window.addEventListener('load', setup);
