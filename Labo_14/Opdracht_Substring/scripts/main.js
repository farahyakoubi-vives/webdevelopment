const toonSubstring = () => {
    const tekst = document.getElementById("txtInput").value;
    const begin = parseInt(document.getElementById("beginIndex").value);
    const eind = parseInt(document.getElementById("endIndex").value);


    if (isNaN(begin) || isNaN(eind) || begin < 0 || eind < 0 || begin > eind || eind > tekst.length) {
        document.getElementById("outputContainer").textContent = "(ongeldige invoer)";
        return;
    }

    const resultaat = tekst.substring(begin, eind);
    document.getElementById("outputContainer").textContent = resultaat;
};

function setup() {
    document.getElementById("btnSubstring").addEventListener("click", toonSubstring);
}

document.addEventListener("DOMContentLoaded", setup);
