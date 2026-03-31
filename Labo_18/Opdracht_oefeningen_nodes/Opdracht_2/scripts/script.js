// Alle li-elementen ophalen als een lijst
const listItems = document.querySelectorAll("li");

// forEach loopt over elk li-element
// className = de class van het element instellen (vervangt eventuele vorige class)
// Door class "listitem" toe te voegen, past CSS automatisch de rode kleur toe
listItems.forEach(function(item) {
    item.className = "listitem";
});

// Een nieuw img-element aanmaken via JS (bestaat nog niet in de HTML)
const img = document.createElement("img");

// Het src-attribuut instellen = het pad naar de afbeelding
img.src = "images/foto.jpeg";

// appendChild voegt het img-element toe als laatste kind van de body
document.body.appendChild(img);
