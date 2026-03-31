//toString()
const event = new Date('2020-04-10T23:15:30');
console.log(event.toString());

//toISOString()
const event2 = new Date('2020-04-10T14:48');
console.log(event2.toISOString());

//toDateString()
const event3 = new Date("2025-04-10T10:10:40");
console.log(event3.toDateString());

//toTimeString()
const event4 = new Date("2025-04-10T12:10:40");
console.log(event4.toTimeString());

let eventt = new Date('2025-04-10T12:10:30');
console.log(eventt.getDate() + "-" + (eventt.getMonth() + 1 ) + "-" + eventt.getFullYear() + " " + eventt.getHours() +
    ":" + eventt.getMinutes() + ":" + eventt.getSeconds());


let student1 = {}; //leeg object
student1.voornaam = "Jan";

student1.geboorteDatum = new Date("1989-04-21");
student1.adres = {};
student1.adres.gemeente = "8500";

console.log(student1.voornaam + " " + "woont in " + student1.adres.gemeente);

delete student1.voornaam;

console.log(student1.postcode); //undefined

/* student1["voornaam"]
student1.voornaam */

// let propertyNaam;

/* if () {
    propertyNaam="voornaam";
} else {
    propertyNaam = "geboortedatum";
}

console.log(student1[propertyNaam]); */

/* let student = {};
student.voornaam = "Jan";
student.familienaam = "Janssens";
student.geboorteDatum = new Date("1993-12-31"); */

/*
let student = {
    voornaam : "Jan",
    familienaam : "Janssens",
    geboorteDatum: new Date("1993-12-31")
}
console.log(student.voornaam, student.familienaam, student.geboorteDatum.toDateString());

 */

let student = {
    voornaam: "Jan",
    familienaam : "Janssens",
    geboorteDatum : new Date("1989-04-21"),
    adres : {
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven: true,
    namenVanExen :
    ["Sofie", "Berta", "Philip", "Alberto"],
    aantalAutos: 2
}
