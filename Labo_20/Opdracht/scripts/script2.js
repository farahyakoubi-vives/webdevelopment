// Programma 2: JSON string terug naar object

const jsonString = '{"naam":"Farah Yakoubi","leeftijd":21,"opleiding":"Toegepaste Informatica","jaar":2,"vakken":["Webdevelopment","Databases","OOP"],"adres":{"straat":"Rijselstraat 5","stad":"Kortrijk","postcode":"8500"},"geslaagd":true}';

const student = JSON.parse(jsonString);

// Print één property van het object
console.log(student.naam);
