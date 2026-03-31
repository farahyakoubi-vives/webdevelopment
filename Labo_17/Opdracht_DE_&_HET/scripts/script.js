const zinnen = [
    "Gisteren zat de jongen op de stoep en at de helft van de appel",
    "de man riep de"
];

for (const tekst of zinnen) {
    console.log(`\nOrigineel: "${tekst}"`);

    let resultaat = "";
    let i = 0;

    while (i < tekst.length) {
        const isD = tekst[i] === 'd' && tekst[i + 1] === 'e';
        const woordBegin = i === 0 || tekst[i - 1] === ' ';
        const woordEinde = i + 2 === tekst.length || tekst[i + 2] === ' ';

        if (isD && woordBegin && woordEinde) {
            resultaat += "het";
            console.log(`  'de' gevonden op positie ${i} → vervangen, tot nu: "${resultaat}"`);
            i += 2;
        } else {
            resultaat += tekst[i];
            i++;
        }
    }

    console.log(`Eindresultaat: "${resultaat}"`);
}
