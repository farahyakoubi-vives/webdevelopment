// setup wordt pas uitgevoerd als de volledige pagina geladen is (via window load)
const setup = () => {
    // Click-listener toevoegen aan de ul (buitenste gebied)
    let uls=document.getElementsByTagName("ul");
    uls[0].addEventListener("click", klik);

    // Click-listener toevoegen aan elk li-element (middelste gebied)
    let lis=document.getElementsByTagName("li");
    for (let i=0;i<lis.length;i++) {
        lis[i].addEventListener("click", klik);
    }

    // Click-listener toevoegen aan elk a-element (binnenste gebied)
    let as=document.getElementsByTagName("a");
    for (let i=0;i<as.length;i++) {
        as[i].addEventListener("click", klik);
    }

};

// event.target      = het element waarop je ECHT hebt geklikt
// event.currentTarget = het element waaraan DEZE listener hangt
// Door bubbling: klik op 'a' → klik-functie wordt 3x aangeroepen (a, li, ul)
const klik = (event) => {
    console.log("target is "+event.target.nodeName+", currentTarget is "+event.currentTarget.nodeName);
};

// Wacht tot de pagina volledig geladen is, dan pas setup() uitvoeren
window.addEventListener("load", setup);