let voornaam = prompt("Enter voornaam: ");
let achternaam = prompt("Enter achternaam: ");
let leeftijd = prompt("Enter leeftijd: ");

let bevestiging = confirm(`Naam: ${voornaam} ${achternaam}, Leeftijd:  ${leeftijd}. Is dit correct?`);

if (bevestiging){
    alert("Registratie geslaagd!");
}else {
    alert("Registratie geannuleerd");
}

console.log(voornaam, achternaam, leeftijd);