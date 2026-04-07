//
let personen = [];

// -1 = nieuwe persoon, >= 0 = index van bestaande persoon in personen array
let huidigIndex = -1;

// Controleer of er nog validatiefouten zichtbaar zijn
const heeftErrors = () => {
    return document.querySelectorAll(".invalid").length > 0;
};

// Vul het formulier met de data van de persoon op de gegeven index
const toonPersoonInFormulier = (index) => {
    const p = personen[index];
    document.getElementById("txtVoornaam").value       = p.voornaam;
    document.getElementById("txtFamilienaam").value    = p.familienaam;
    document.getElementById("txtGeboorteDatum").value  = p.geboorteDatum;
    document.getElementById("txtEmail").value          = p.email;
    document.getElementById("txtAantalKinderen").value = p.aantalKinderen;
    clearAllErrors();
};

// Maak alle velden in het formulier leeg
const leegMaakFormulier = () => {
    document.getElementById("txtVoornaam").value       = "";
    document.getElementById("txtFamilienaam").value    = "";
    document.getElementById("txtGeboorteDatum").value  = "";
    document.getElementById("txtEmail").value          = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

// Herbouw de <select> lijst op basis van de personen array
const updateLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        const optie = document.createElement("option");
        optie.id          = i;   // index als id-attribuut (zie taakomschrijving)
        optie.textContent = personen[i].familienaam + " " + personen[i].voornaam;
        lst.appendChild(optie);
    }
    // Selecteer de huidig bewerkte persoon opnieuw in de lijst
    lst.selectedIndex = huidigIndex;
};

// Event listener – knop "Bewaar"
const bewaarBewerktePersoon = () => {
    valideer();
    if (heeftErrors()) return;

    const voornaam       = document.getElementById("txtVoornaam").value.trim();
    const familienaam    = document.getElementById("txtFamilienaam").value.trim();
    const geboorteDatum  = document.getElementById("txtGeboorteDatum").value.trim();
    const email          = document.getElementById("txtEmail").value.trim();
    const aantalKinderen = parseInt(document.getElementById("txtAantalKinderen").value.trim());

    if (huidigIndex === -1) {
        // Nieuwe persoon: object aanmaken en toevoegen aan array
        personen.push({ voornaam, familienaam, geboorteDatum, email, aantalKinderen });
        huidigIndex = personen.length - 1;
    } else {
        // Bestaande persoon: properties aanpassen
        personen[huidigIndex].voornaam       = voornaam;
        personen[huidigIndex].familienaam    = familienaam;
        personen[huidigIndex].geboorteDatum  = geboorteDatum;
        personen[huidigIndex].email          = email;
        personen[huidigIndex].aantalKinderen = aantalKinderen;
    }

    updateLijst();
};

// Event listener – knop "Nieuw"
const bewerkNieuwePersoon = () => {
    huidigIndex = -1;
    leegMaakFormulier();
    document.getElementById("lstPersonen").selectedIndex = -1;
};

// Setup: event listeners registreren + initiële lijst opbouwen
const setup = () => {
    document.getElementById("btnBewaar").addEventListener("click", bewaarBewerktePersoon);
    document.getElementById("btnNieuw").addEventListener("click", bewerkNieuwePersoon);

    document.getElementById("lstPersonen").addEventListener("change", (event) => {
        const geselecteerdeOptie = event.target.selectedOptions[0];
        huidigIndex = parseInt(geselecteerdeOptie.id);
        toonPersoonInFormulier(huidigIndex);
    });

    updateLijst();
};

window.addEventListener("load", setup);
