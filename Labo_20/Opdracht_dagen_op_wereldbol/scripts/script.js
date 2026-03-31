const geboortedatum = new Date(2000, 2, 24); // jaar, maand (0-gebaseerd), dag
const vandaag = new Date();

const verschilMs = vandaag - geboortedatum;
const aantalDagen = Math.floor(verschilMs / (1000 * 60 * 60 * 24));

console.log(`Aantal dagen op de wereldbol: ${aantalDagen}`);