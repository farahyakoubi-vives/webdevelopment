//Bevat alle beschikbare commando's met hun instellingen
const commands = {
    "/g": {
        //,aam die in kaart staat
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
    let container = document.getElementById("historyContainer");
    container.innerHTML = "";

    if (historyArray.length === 0) {
        container.innerHTML = "<p class='text-muted'>Nog geen geschiedenis...</p>";
        return;
    }

    for (let i = 0; i < historyArray.length; i++) {
        let item = historyArray[i];
        let cardHtml = "";
        cardHtml = cardHtml + "<div class='col-md-4 mb-3'>";
        cardHtml = cardHtml + "  <div class='card " + item.cssClass + "'>";
        cardHtml = cardHtml + "    <div class='card-body'>";
        cardHtml = cardHtml + "      <h5 class='card-title'>" + item.title + "</h5>";
        cardHtml = cardHtml + "      <p class='card-text'>" + item.text + "</p>";
        cardHtml = cardHtml + "      <button class='btn btn-sm btn-go' onclick='openUrl(\"" + item.url + "\")'>Go!</button>";
        cardHtml = cardHtml + "    </div>";
        cardHtml = cardHtml + "  </div>";
        cardHtml = cardHtml + "</div>";
        container.innerHTML = container.innerHTML + cardHtml;
    }
};

const opslaanGeschiedenis = (item) => {
    let newArray = [];
    newArray.push(item);

    for (let i = 0; i < historyArray.length; i++) {
        newArray.push(historyArray[i]);
    }

    historyArray = newArray;
    localStorage.setItem("historyData", JSON.stringify(historyArray));
};

const laadGeschiedenis = () => {
    let saved = localStorage.getItem("historyData");

    if (saved !== null) {
        historyArray = JSON.parse(saved);
    }

    toonGeschiedenis();
};

const executeCommand = () => {
    let input = document.getElementById("commandInput").value;
    input = input.trim();

    if (input === "") {
        alert("Typ een commando alstublieft!");
        return;
    }

    let spaceIndex = input.indexOf(" ");

    if (spaceIndex === -1) {
        alert("Fout: Gebruik formaat '/[letter] [zoekterm]'");
        return;
    }

    let commandKey = input.substring(0, spaceIndex);
    let searchTerm = input.substring(spaceIndex + 1);

    if (commands[commandKey] === undefined) {
        alert("Onbekend commando! Gebruik: /g, /y, /x of /i");
        return;
    }

    let command = commands[commandKey];
    let fullUrl = command.url + encodeURIComponent(searchTerm);

    let historyItem = {
        title: command.title,
        text: searchTerm,
        url: fullUrl,
        cssClass: command.cssClass
    };

    opslaanGeschiedenis(historyItem);
    toonGeschiedenis();
    window.open(fullUrl, "_blank");
    document.getElementById("commandInput").value = "";
};



laadGeschiedenis();

document.getElementById("commandInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        executeCommand();
    }
});