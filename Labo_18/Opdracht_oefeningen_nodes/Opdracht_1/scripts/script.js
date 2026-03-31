// querySelectorAll("p") geeft een lijst terug van alle p-elementen op de pagina
const paragrafen = document.querySelectorAll("p");

// [0] = het eerste (en enige) p-element
// textContent = de tekst binnenin het element aanpassen
paragrafen[0].textContent = "Goed gedaan!";
