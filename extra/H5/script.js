const temperaturen = [22, 5, 18, -3, 30];
temperaturen.sort((a, b) => a - b);
console.log(temperaturen);


const scores = [ 45, 12, 78, 3, 60];
scores.sort((a, b) => b - a);
console.log(scores);


const woorden1 = ['kers', 'aardbei', 'banaan', 'druif'];
const aflopend = (a, b) => b.localeCompare(a);
woorden1.sort(aflopend);
console.log(woorden1);


const producten = [
    {naam: 'Laptop', prijs:899},
    {naam: 'Muis', prijs: 25},
    {naam: 'Toetsenbord', prijs: 60},
    {naam: 'Monitor', prijs: 220}
];

producten.sort((a, b) => b.prijs - a.prijs);
console.log(producten);


const studenten = [
    {naam: 'Lina', cijfer:14},
    {naam: 'Tom', cijfer: 14},
    {naam: 'sara', cijfer: 18},
    {naam: 'karim', cijfer: 9}
];

studenten.sort((a, b) => a.cijfer - b.cijfer);
console.log(studenten);


const films = ['Inception', 'The matrix', 'Interstellar', 'Up', 'Her'];
films.sort((a, b) => a.length - b.length);
console.log(films);


const werknemers = [
    { naam: 'Anna', afdeling: 'IT', jaren: 5 },
    { naam: 'Bram', afdeling: 'Sales', jaren: 2 },
    { naam: 'Cleo', afdeling: 'IT', jaren: 3 },
    { naam: 'Dirk', afdeling: 'Sales', jaren: 8 },
    { naam: 'Eva', afdeling: 'IT', jaren: 3 }
];
werknemers.sort((a, b) => a.afdeling.localeCompare (b.afdeling) || b.jaren - a.jaren);
console.log(werknemers);

const woorden = ['kiwi', 'Appel', 'banaan', 'Cactus', 'aardbei'];
woorden.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(woorden);



const bestellingen = [
    { klant: 'De Smet', status: 'verzonden', bedrag: 45.5, datum: '2024-03-12' },
    { klant: 'Janssens', status: 'in behandeling', bedrag: 120, datum: '2024-03-10' },
    { klant: 'Peeters', status: 'verzonden', bedrag: 80, datum: '2024-03-15' },
    { klant: 'Maes', status: 'geannuleerd', bedrag: 15.75, datum: '2024-03-11' },
    { klant: 'De Smet', status: 'in behandeling', bedrag: 30, datum: '2024-03-14' },
    { klant: 'Willems', status: 'verzonden', bedrag: 80, datum: '2024-03-09' }
];
const volgorde = {
    'in behandeling': 1,
    'verzonden': 2,
    'geannuleerd': 3
};

bestellingen.sort((a, b) => volgorde[a.status] - volgorde[b.status]
    || b.bedrag - a.bedrag
    || a.klant.localeCompare(b.klant));
console.log(bestellingen);