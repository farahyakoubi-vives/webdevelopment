//Bevat alle beschikbare commando's met hun instellingen
const commands = {
    "/g": {
        //naam die in kaart staat
        title: "Google",
        //ul waar zoekterm wordt toegevoegd
        url: "https://www.google.com/search?q=",
        //voor css styling
        cssClass: "card-google"
    },
    "/y": {
        title: "YouTube",
        url: "https://www.youtube.com/results?search_query=",
        cssClass: "card-youtube"
    },
    "/x": {
        title: "X",
        url: "https://x.com/hashtag/",
        cssClass: "card-x"
    },
    "/i": {
        title: "Instagram",
        url: "https://www.instagram.com/explore/tags/",
        cssClass: "card-instagram"
    }
};

//deel voor de history
//cssclass
let historyArray = [];


//functie openurl
//open van de url in een nieuw tabblad
//opent url in een nieuwe window
const openUrl = (url) => {
    window.open(url, "_blank");
};
//toon geschiedenis en visueel te tonen op scherm
const toonGeschiedenis = () => {
    //haalt html element op met id historyContainer
    let container = document.getElementById("historyContainer");
    //verwijdert alle inhoud uit container (alle oude kaarten)
    container.innerHTML = "";

    //controleer of de array leeg is
    if (historyArray.length === 0) {
        //als het leeg is: toon placeholder bericht
        container.innerHTML = "<p class='text-muted'>Nog geen geschiedenis...</p>";
        return; //stop functie
    }
    //for loop: door elke item in de historyArray
    for (let i = 0; i < historyArray.length; i++) {
        //huidige item ophalen
        let item = historyArray[i];
        //string voor HTML kaart opbouwen
        let cardHtml = "";
        //bootstrap kolom 4 van 12 = 1/3 breedte
        cardHtml = cardHtml + "<div class='col-md-4 mb-3'>";
        //bootstrap met css-klasse voor kleur
        cardHtml = cardHtml + "  <div class='card " + item.cssClass + "'>";
        //inhoud van kaart
        cardHtml = cardHtml + "    <div class='card-body'>";
        //titel
        cardHtml = cardHtml + "      <h5 class='card-title'>" + item.title + "</h5>";
        //zoekterm
        cardHtml = cardHtml + "      <p class='card-text'>" + item.text + "</p>";
        //knop die openurl aanroept met de url
        //de url wordt in quotes gezet zodat onclick correct JS is
        cardHtml = cardHtml + "      <button class='btn btn-sm btn-go' onclick='openUrl(\"" + item.url + "\")'>Go!</button>";
        //einde kaart inhoud
        cardHtml = cardHtml + "    </div>";
        //einde kaart
        cardHtml = cardHtml + "  </div>";
        //einde kolom
        cardHtml = cardHtml + "</div>";
        //voeg html toe aan container
        container.innerHTML = container.innerHTML + cardHtml;
    }
};

const opslaanGeschiedenis = (item) => {
    let newArray = [];
    //voegt nieuwe item als eerste toe, meest recent bovenaan
    newArray.push(item);
    //loop door alle bestaande items en voeg ze toe
    for (let i = 0; i < historyArray.length; i++) {
        newArray.push(historyArray[i]);
    }
    //vervang de globale historyarray met de nieuwe (met nieuw item vooraan)
    historyArray = newArray;
    //sla de hele array op in localstorage
    localStorage.setItem("historyData", JSON.stringify(historyArray));
};
//haalt historydata uit localstorage
//localstorage geeft altijd string terug (of null als niet gevonden)
const laadGeschiedenis = () => {
    let saved = localStorage.getItem("historyData");
//controleert of er iets opgeslagen is
    if (saved !== null) {
        historyArray = JSON.parse(saved);
        //json.parse zet string terug om in array object
    }
//toon de geschiedenis op scherm
    toonGeschiedenis();
};
//haalt waarde uit tekstinput
const executeCommand = () => {
    let input = document.getElementById("commandInput").value;
    //trim bv.: /g google
    input = input.trim();

    if (input === "") {
        alert("Typ een commando alstublieft!");
        return;
    }
    //bv.: /g google --> indexof geeft 2 (spatie op positie 2)
    let spaceIndex = input.indexOf(" ");
//controleert of spatie is gevonden
    //geen spatie betekent verkeerd format (bv.: /ggoogle zonder spatie)
    if (spaceIndex === -1) {
        alert("Fout: Gebruik formaat '/[letter] [zoekterm]'");
        return;
    }
    //alles voor de spatie
    let commandKey = input.substring(0, spaceIndex);
    //alles na de spatie
    let searchTerm = input.substring(spaceIndex + 1);
//controleert of dit undefined is (niet bestaat)
    if (commands[commandKey] === undefined) {
        alert("Onbekend commando! Gebruik: /g, /y, /x of /i");
        return;
    }
    //haalt het commando object op
    let command = commands[commandKey];
    //bouwt volledige url
    let fullUrl = command.url + encodeURIComponent(searchTerm);
    //dit wordt opgeslagen en later weergegeven als kaart
    let historyItem = {
        title: command.title, //Bv.: Google
        text: searchTerm, //Bv.: google
        url: fullUrl, //volledige zoekurl
        cssClass: command.cssClass //bv card google (voor kleur)
    };
    //voegt item toe aan array en slaap op in localstorage
    opslaanGeschiedenis(historyItem);
    //scherm wordt ververst: nieuwe kaart verschijnt nu
    toonGeschiedenis();
    //black = nieuw tabblad
    window.open(fullUrl, "_blank");
    //zet de waarde van input op lege string
    //zodat gebruiker meteen volgende commando kan intypen
    document.getElementById("commandInput").value = "";
};





laadGeschiedenis();
//koppel enter toets aan executecommand
//als event.key == enter roep executecommand
//dit laat gebruikers executecommand aanroepen met enter (niet alleen via knop)
document.getElementById("commandInput").addEventListener("keypress", function(event) {
    //event.key bevat welke toets ingedrukt is
    if (event.key === "Enter") {
        //voer commando uit
        executeCommand();
    }
});