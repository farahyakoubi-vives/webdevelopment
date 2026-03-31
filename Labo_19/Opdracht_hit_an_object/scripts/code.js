// Hier bewaren we alle vaste waarden en de spelstatus.
// Door ze op één plek te zetten, zijn ze makkelijk aan te passen.

let global = {
    IMAGE_COUNT: 5, // hoeveel verschillende afbeeldingen er zijn
    IMAGE_SIZE: 48, // breedte/hoogte van de afbeelding in pixels
    IMAGE_PATH_PREFIX: "images/",// map waar de afbeeldingen staan
    IMAGE_PATH_SUFFIX: ".png",   // bestandsextensie van de afbeeldingen
    MOVE_DELAY: 3000,// om de hoeveel milliseconden beweegt het doel
    score: 0, //bijhouden hoeveel keer de speler het doel heeft geraakt
    timeoutId: 0 // id van de timer, zodat we die later kunnen stoppen
};


// Deze functie wordt automatisch uitgevoerd zodra de pagina
// volledig geladen is (zie window.addEventListener onderaan).
// We koppelen hier click-events aan de knoppen en het doel.
const setup = () => {
    // Wanneer je op de afbeelding klikt → roep hitTarget aan
    document.getElementById("target").addEventListener("click", hitTarget);

    // Wanneer je op de startknop klikt → roep startSpel aan
    document.getElementById("startKnop").addEventListener("click", startSpel);
};

// Wordt uitgevoerd als de speler op "Start" klikt.
// setInterval roept verplaatsImage op elke MOVE_DELAY ms.

function startSpel() {
    setInterval(verplaatsImage, global.MOVE_DELAY);
}
// Wordt uitgevoerd als je op het doel klikt.
// 1. Score ophogen met 1
// 2. Het getal op het scherm bijwerken
// 3. Het doel meteen verplaatsen als beloning

function hitTarget() {
    global.score++;  // score = score + 1

    // Zoek het <span id="scoreDisplay"> element en pas de tekst aan
    document.getElementById("scoreDisplay").textContent = global.score;

    // Verplaats het doel direct naar een nieuwe positie
    verplaatsImage();
}

// Kiest een willekeurige positie en een willekeurige afbeelding,
// en past die toe op het doel-element.
// ============================================================
function verplaatsImage() {
    // Math.random() geeft een getal tussen 0 en 1
    // Math.floor() rond naar beneden af zodat we een geheel getal krijgen
    // We trekken IMAGE_SIZE af zodat de afbeelding nooit buiten het speelveld valt
    let randomX = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    let randomY = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));

    // Kies een willekeurig getal tussen 0 en IMAGE_COUNT (niet inclusief)
    let randomImage = Math.floor(Math.random() * global.IMAGE_COUNT);

    // Pas CSS-positie aan (werkt omdat het element position: absolute heeft)
    document.getElementById("target").style.left = randomX + "px";
    document.getElementById("target").style.top  = randomY + "px";

    // Stel de juiste afbeelding in, bv: "images/3.png"
    document.getElementById("target").src = global.IMAGE_PATH_PREFIX + randomImage + global.IMAGE_PATH_SUFFIX;
}


// De pagina is pas volledig geladen als het "load" event afgaat.
// Pas daarna mogen we elementen opzoeken via getElementById.
window.addEventListener("load", setup);
