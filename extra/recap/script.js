const naam = prompt("Enter jou naam: ");

const bevestiging = confirm(naam);
alert(`${naam} ${bevestiging}`);

let getal1 = prompt("Enter getal 1: ");
let getal2 = prompt("Enter getal 2: ");

const bewerking = (getal1, getal2) => Number(getal1) + Number(getal2);
bewerking(getal1, getal2);

alert(bewerking(getal1, getal2));
