// Verwijzingen naar de HTML-elementen ophalen zodat we ze in JS kunnen gebruiken
const rSlider = document.getElementById("rSlider");
const gSlider = document.getElementById("gSlider");
const bSlider = document.getElementById("bSlider");
const colorBox = document.getElementById("colorBox");
const swatches = document.getElementById("swatches"); // container waar swatches in komen

// Wordt aangeroepen telkens een slider beweegt
function update() {
    // Huidige waarde van elke slider uitlezen (getal van 0 tot 255)
    const r = rSlider.value;
    const g = gSlider.value;
    const b = bSlider.value;

    // De cijfers naast de labels bijwerken in de HTML
    document.getElementById("rValue").textContent = r;
    document.getElementById("gValue").textContent = g;
    document.getElementById("bValue").textContent = b;

    // De achtergrondkleur van het voorbeeldvakje instellen
    // Template literal bouwt een string: bv. "rgb(255, 0, 128)"
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Stelt de sliders in op een opgegeven kleur en roept update() aan
// Wordt gebruikt wanneer je op een opgeslagen swatch klikt
function setColor(r, g, b) {
    rSlider.value = r;
    gSlider.value = g;
    bSlider.value = b;
    update(); // visueel bijwerken na het aanpassen van de sliders
}

// Wordt aangeroepen bij klik op de Save-knop
function saveSwatch() {
    // Huidige kleurwaarden uitlezen en bewaren in variabelen
    const r = rSlider.value;
    const g = gSlider.value;
    const b = bSlider.value;
    const color = `rgb(${r}, ${g}, ${b})`;

    // Een wrapper-div aanmaken die de swatch en de delete-knop omhult
    const wrapper = document.createElement("div");
    wrapper.classList.add("swatch-wrapper"); // CSS-klasse toevoegen voor opmaak

    // Het gekleurde rechthoekje aanmaken
    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = color; // kleur instellen op het moment van opslaan

    // Bij klik op de swatch: herstel de sliders naar deze bewaarde kleur
    // r, g, b worden hier "onthouden" (closure) vanuit saveSwatch
    swatch.addEventListener("click", () => setColor(r, g, b));

    // De X-knop aanmaken
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", (e) => {
        // stopPropagation voorkomt dat de klik op X ook de swatch-click triggert
        e.stopPropagation();
        // De volledige wrapper (swatch + knop) verwijderen uit de pagina
        swatches.removeChild(wrapper);
    });

    // De swatch en de delete-knop in de wrapper steken
    wrapper.appendChild(swatch);
    wrapper.appendChild(deleteBtn);

    // De wrapper toevoegen aan de swatches-container in de HTML
    swatches.appendChild(wrapper);
}

// Elke slider luistert naar het "input" event (= bewegen van de slider)
// Alle drie roepen dezelfde update() functie aan
rSlider.addEventListener("input", update);
gSlider.addEventListener("input", update);
bSlider.addEventListener("input", update);

// De Save-knop luistert naar een klik en roept saveSwatch() aan
document.getElementById("saveBtn").addEventListener("click", saveSwatch);