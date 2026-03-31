function toonResultaat() {
    // 1. Checkbox
    const isRoker = document.getElementById('roker').checked;
    console.log(isRoker ? "is roker" : "is geen roker");

    // 2. Radiobuttons
    const radios = document.getElementsByName("moedertaal");
    let moedertaal = "(niet geselecteerd)";
    for (let r of radios) {
        if (r.checked) {
            moedertaal = r.value;
            break;
        }
    }
    console.log("moedertaal is " + moedertaal);

    // 3. Enkelvoudige select
    const buurlandSelect = document.getElementById('buurland');
    const buurland = buurlandSelect.options[buurlandSelect.selectedIndex].value;
    console.log("favoriete buurland is " + buurland);

    // 4. Multi-select
    const bestellingSelect = document.getElementById('bestelling');
    let bestelling = "";
    for (let opt of bestellingSelect.options) {
        if (opt.selected) bestelling += opt.value + " ";
    }
    console.log("bestelling bestaat uit " + bestelling.trim());
}