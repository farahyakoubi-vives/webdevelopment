// Verwijzingen naar de HTML-elementen ophalen zodat we ze in JS kunnen gebruiken
const rSlider = document.getElementById("rSlider");
const gSlider = document.getElementById("gSlider");
const bSlider = document.getElementById("bSlider");
const colorBox = document.getElementById("colorBox");
const swatches = document.getElementById("swatches"); // container waar swatches in komen

// Laadt de opgeslagen swatches uit localStorage (array van {r, g, b} objecten)
// Als er nog niets opgeslagen is, beginnen we met een lege array
function loadSwatchData() {
    const data = localStorage.getItem("swatches");
    return data ? JSON.parse(data) : [];
}

// Slaat de volledige lijst van swatches op in localStorage
function saveSwatchData(arr) {
    localStorage.setItem("swatches", JSON.stringify(arr));
}

// Maakt één swatch-element aan in de DOM op basis van r, g, b waarden
// index verwijst naar de positie in de opgeslagen array (nodig bij verwijderen)
function createSwatchElement(r, g, b) {
    const color = `rgb(${r}, ${g}, ${b})`;

    const wrapper = document.createElement("div");
    wrapper.classList.add("swatch-wrapper");

    const swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = color;
    swatch.addEventListener("click", () => setColor(r, g, b));

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        // De wrapper uit de DOM verwijderen
        swatches.removeChild(wrapper);
        // De bijhorende kleur ook uit localStorage verwijderen
        // We zoeken de swatch op basis van kleurwaarden
        const arr = loadSwatchData();
        const newArr = arr.filter(s => !(s.r == r && s.g == g && s.b == b));
        saveSwatchData(newArr);
    });

    wrapper.appendChild(swatch);
    wrapper.appendChild(deleteBtn);
    return wrapper;
}

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
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Huidige sliderwaarden opslaan in localStorage
    localStorage.setItem("sliderR", r);
    localStorage.setItem("sliderG", g);
    localStorage.setItem("sliderB", b);
}

// Stelt de sliders in op een opgegeven kleur en roept update() aan
function setColor(r, g, b) {
    rSlider.value = r;
    gSlider.value = g;
    bSlider.value = b;
    update();
}

// Wordt aangeroepen bij klik op de Save-knop
function saveSwatch() {
    const r = rSlider.value;
    const g = gSlider.value;
    const b = bSlider.value;

    // Swatch toevoegen aan de DOM
    const wrapper = createSwatchElement(r, g, b);
    swatches.appendChild(wrapper);

    // Swatch ook opslaan in localStorage
    const arr = loadSwatchData();
    arr.push({ r, g, b });
    saveSwatchData(arr);
}

// Bij het laden van de pagina: slider- en swatch-staat herstellen vanuit localStorage
function restoreState() {
    // Sliderwaarden herstellen (standaard 0 als nog niets opgeslagen)
    const r = localStorage.getItem("sliderR") ?? 0;
    const g = localStorage.getItem("sliderG") ?? 0;
    const b = localStorage.getItem("sliderB") ?? 0;
    setColor(r, g, b);

    // Alle opgeslagen swatches opnieuw aanmaken in de DOM
    const arr = loadSwatchData();
    arr.forEach(s => {
        const wrapper = createSwatchElement(s.r, s.g, s.b);
        swatches.appendChild(wrapper);
    });
}

// Elke slider luistert naar het "input" event (= bewegen van de slider)
rSlider.addEventListener("input", update);
gSlider.addEventListener("input", update);
bSlider.addEventListener("input", update);

// De Save-knop luistert naar een klik en roept saveSwatch() aan
document.getElementById("saveBtn").addEventListener("click", saveSwatch);

// Pagina herstellen bij het opstarten
restoreState();