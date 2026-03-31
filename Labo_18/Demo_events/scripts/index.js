// setup wordt uitgevoerd zodra de pagina volledig geladen is
const setup = () => {
    // querySelectorAll geeft alle elementen met class "text" terug als een lijst
    let texts=document.querySelectorAll(".text");
    // Loop over alle paragrafen en voeg aan elk een click-listener toe
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}
}

// Wordt aangeroepen bij een klik op een paragraaf
const klik = (event) => {
    // event.target = het element waarop geklikt werd
    // .style.color = de tekstkleur instellen via JS
	event.target.style.color="red";
};

// Wacht tot de pagina geladen is voor setup() uit te voeren
window.addEventListener("load", setup);