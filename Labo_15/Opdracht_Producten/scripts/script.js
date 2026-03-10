document.getElementById("herbereken").addEventListener("click", bereken);

function bereken() {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtot = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].textContent);
        let aantal = parseFloat(aantallen[i].value);
        let btwPerc = parseFloat(btw[i].textContent);

        let subtotaal = prijs * aantal * (1 + btwPerc /100);
        subtot[i].textContent = subtotaal.toFixed(2) + " EUR";

        totaal += subtotaal;
    }
    document.getElementById("totaal").textContent = totaal.toFixed(2) + " EUR";
}