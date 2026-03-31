//6 verschillende kaarten
let AANTAL_KAARTEN = 6;
//lijst met alle kaarten
let AFBEELDINGEN = [
    "images/kaart1.png",
    "images/kaart2.png",
    "images/kaart3.png",
    "images/kaart4.png",
    "images/kaart5.png",
    "images/kaart6.png",
    "images/achterkant.png"
];
//start als null en onhoudt welke kaart je als eerste hebt omgedraait
let eersteKaart = null;
//voorkomt dat je klikt terwijl het spel nog bezig is met vergelijken van kaarten
let bezig = false;

//functie aanroepen zodra de pagina geladen is en roept maakKaarten aan
function setup() {
    maakKaarten();
}

function maakKaarten() {
    // elke kaart wordt twee keer toegevoegd aan deck paren maken
    let deck = []; //een lege lijst hier komen straks alle kaarten
    //for loop dat 6 keer herhaalt
    for (let i = 0; i < AANTAL_KAARTEN; i++) {
        //voeg de afbeelding op positie i toe aan deck
        deck.push(AFBEELDINGEN[i]);
        deck.push(AFBEELDINGEN[i]);
    }

    // Schud het deck willekeurig, geeft een getal tussen 0-1 en
    //en door -0.5 krijg je soms een pos of neg
    // getal waardoor volgorde willekeurig wordt
    deck.sort(function() {
        return Math.random() - 0.5;
    });

    // Maak voor elke kaart in het deck een afbeelding aan
    let speelbord = document.getElementById("speelbord");

    for (let i = 0; i < deck.length; i++) {
        let img = document.createElement("img");
        img.src = AFBEELDINGEN[AFBEELDINGEN.length - 1]; // toon de achterkant
        img.setAttribute("data-kaart", deck[i]); // sla de echte afbeelding op
        img.classList.add("dicht");
        img.addEventListener("click", draaiOm);
        speelbord.appendChild(img);
    }
}

function draaiOm(event) {
    let kaart = event.target;

    // Negeer klik als het spel bezig is of als de kaart al open is
    if (bezig || !kaart.classList.contains("dicht")) {
        return;
    }

    // Draai de kaart om
    kaart.src = kaart.getAttribute("data-kaart");
    kaart.classList.remove("dicht");
    kaart.classList.add("open");

    if (eersteKaart === null) {
        // Dit is de eerste kaart
        eersteKaart = kaart;
    } else {
        // Dit is de tweede kaart: vergelijk met de eerste
        bezig = true;

        if (eersteKaart.getAttribute("data-kaart") === kaart.getAttribute("data-kaart")) {
            // Gelijk! Verwijder beide kaarten na 1 seconde
            setTimeout(function() {
                eersteKaart.remove();
                kaart.remove();
                eersteKaart = null;
                bezig = false;
            }, 1000);
        } else {
            // Niet gelijk: draai beide terug na 1 seconde
            setTimeout(function() {
                eersteKaart.src = AFBEELDINGEN[AFBEELDINGEN.length - 1];
                kaart.src = AFBEELDINGEN[AFBEELDINGEN.length - 1];
                eersteKaart.classList.remove("open");
                kaart.classList.remove("open");
                eersteKaart.classList.add("dicht");
                kaart.classList.add("dicht");
                eersteKaart = null;
                bezig = false;
            }, 1000);
        }
    }
}

window.addEventListener("load", setup);
