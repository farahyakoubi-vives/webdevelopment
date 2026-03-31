let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoek = "an";
let teller = 0;
let positie = tekst.indexOf(zoek);

while (positie !== -1) {
    teller++;
    positie = tekst.indexOf(zoek, positie + 1);
}

console.log("Aantal keer 'an': " + teller);