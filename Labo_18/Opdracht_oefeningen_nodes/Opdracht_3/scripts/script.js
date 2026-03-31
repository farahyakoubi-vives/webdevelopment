// Wordt aangeroepen telkens de knop geklikt wordt
function voegPToe() {
    // Het div-element ophalen via zijn id
    const div = document.getElementById("myDIV");

    // Een nieuw p-element aanmaken (bestaat nog niet in de HTML)
    const p = document.createElement("p");

    // De tekst van het nieuwe p-element instellen
    p.textContent = "Dit is een nieuw p-element.";

    // Het nieuwe p-element toevoegen binnenin de div, onderaan
    div.appendChild(p);
}
