// Programma 1: object naar JSON string

const student1 = {
    naam: "Farah Yakoubi",
    leeftijd: 21,
    opleiding: "Toegepaste Informatica",
    jaar: 2,
    vakken: ["Webdevelopment", "Databases", "OOP"],
    adres: {
        straat: "Rijselstraat 5",
        stad: "Kortrijk",
        postcode: "8500"
    },
    geslaagd: true
};

const jsonString = JSON.stringify(student1);
console.log(jsonString);
