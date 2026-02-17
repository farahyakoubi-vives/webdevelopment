function wijzigTekst() {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}


function setup() {
    const button = document.getElementById("wijzigButton");
    button.addEventListener("click", wijzigTekst);
}


document.addEventListener('DOMContentLoaded', setup);
