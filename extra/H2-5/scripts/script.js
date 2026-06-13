//oef1
const begroet = (naam) => {
    return 'Hallo ' + naam + ' !';
}
console.log(begroet("Farah"));
console.log("-------------------------------------------------------------")
//oef2
const begroet2 = (naam) => 'Hallo ' + naam + ' !';

console.log(begroet2("Farah"));


console.log("----------------------------------------------------------")
//oef3
const som = (getal1 , getal2) => {
    return getal1 + getal2;
}

console.log(som(5, 3));
console.log("-----------------------------------------------------------")
//oef3.1
const som2 = (getal1, getal2) => getal1 + getal2;
console.log(som2(3,5));

console.log("-----------------------------------------------------------")
//oef 4
let score = 10;
score = 20;
const name = "Farah";


console.log(score);
console.log(name);
console.log("----------------------------------------------------");
const begroet3 = (naam) => {
    return 'Hallo ' + naam + ' !';
}

let resultaat = begroet("Farah");
resultaat = begroet3("Sarah")
console.log(resultaat);

console.log("----------------------------------------------------");
//oefening 6
const tekst = "Web Development ";

console.log(tekst.length);
console.log(tekst.toUpperCase());
console.log(tekst.indexOf('Development'));
console.log("-----------------------------------------------------");


//oef 7
const email = " Farah.Yakoubi@student.vives.be ";
const resultaat2 = email.trim().toLowerCase();
console.log(resultaat2);

console.log("---------------------------------------------------------");

//oef 8
const zin = "JavaScript is geweldig";
console.log(zin.length);
console.log(zin.charAt(4));
console.log(zin.replace("geweldig", "moeilijk"));
console.log(zin.split(' '));

console.log("------------------------------------------------------");

//oef 9
const fruits = ["appel", "banaan", "peer"];

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log("------------------------------------------------------------");


//oef 10 arrays aanpassen
fruits.push("mango");
fruits.unshift("aardbei");
fruits.pop();
console.log(fruits);

console.log("-----------------------------------------------------------");
//if/else
const leeftijd = 20;

if(leeftijd >= 18){
    console.log("Je bent volwassen");
}else {
    console.log("Je bent minderjarig");
}

console.log("---------------------------------------------------------");
//if else schrijven

const isPositief = (getal) => {
    if (getal > 0){
        return "Postief";
    }else if (getal< 0 ){
        return "Negatief";
    }else {
        return "Nul";
    }

}

console.log(isPositief(5));
console.log(isPositief(-3));
console.log(isPositief(0));

console.log("-------------------------------------------------------------");

//H4 for loop
// for (let i = 0; i < 5; i++){
   // console.log(i);
//}

console.log("---------------------------------------------------------");

const kleuren = ["rood", "groen", "blauw", "geel"];

for (let i = 0; i < kleuren.length; i++){
    console.log(kleuren[i]);
}

console.log("---------------------------------------------------------------");

//mini toets
const woorden = ["appel", "banaan", "peer", "aardbei", "kiwi"];
const filterLang = (woorden) => {
    const resultaat = [];

    for (let i = 0; i < woorden.length; i++){
        if(woorden[i].length > 5){
            resultaat.push(woorden[i]);
        }
    }
    return resultaat;
}
console.log(filterLang(woorden));

console.log("----------------------------------------------------------------");

//while loop
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}

console.log("-------------------------------------------------------------");


let getal = 1;
while (getal <= 10){
    console.log(getal);
    getal += 2;
}

console.log("----------------------------------------------------------------------");


//oefening while loop
let getalwhile = 100;
while (getalwhile > 0 ){
    console.log(getalwhile);
    getalwhile -= 10;
}



console.log("-----------------------------------------------------------");
//while vs do while
do {
    console.log(i);
    i++;
} while (i < 5);

console.log("------------------------------------------------------------");

let b = 10;
do {
    console.log(b);
    b++;
}while (b<5);

console.log("-------------------------------------------------------------------");

//sorteren
const namen = ["Bavo", "Alice", "Cedric"];
namen.sort();
console.log(namen);

// sorteren voor getallen
const getallen = [10, 2, 50, 8];
getallen.sort((a, b) => a-b)
console.log(getallen);

console.log("-----------------------------------------------------------");

//oefening sorteren
const scoress = [45, 12, 78, 3, 56];
scoress.sort((a, b) => b-a);
console.log(scoress);
console.log("----------------------------------------------------------------");

//oef 2 sorteren
const landen = ["Frankrijk", "Belgie", "Nederland", "Duitsland"];
landen.sort((a, b) => b.localeCompare(a));
console.log(landen);