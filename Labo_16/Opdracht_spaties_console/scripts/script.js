document.getElementById("toonTekst").addEventListener("click", toonMetSpaties);

function toonMetSpaties() {

    let tekst = document.getElementById("tekstInput").value;
    let resultaat = "";

    for (let i = 0; i < tekst.length; i++) {
        resultaat += tekst[i];

        if (i < tekst.length - 1) {
            resultaat += " ";
        }
    }

    console.log(resultaat);
}