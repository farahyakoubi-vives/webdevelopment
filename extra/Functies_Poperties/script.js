const begroet = (naam) => {
    return "Hallo, " + naam + "!";
}

console.log(begroet("Farah"));


const optellen = (a, b) => a + b;
console.log(optellen(10, 5));

const isVolwassen = (leeftijd) => {

    if (leeftijd >= 18) {
    return true;
    } else {
        return false;
    }
}
console.log(isVolwassen(16));
console.log(isVolwassen(21));


const maakVolledigeNaam = (voornaam, achternaam) => {
    return `${voornaam} ${achternaam}`;
}

console.log(maakVolledigeNaam("Farah", "Yakoubi"));


const berekenOppervlakte = (lengte, breedte) => {
    if (lengte <= 0 || breedte <= 0){
        return -1;
    }else {
        return lengte * breedte;
    }
}

console.log(berekenOppervlakte(5,3));
console.log(berekenOppervlakte(0,3));
console.log(berekenOppervlakte(4,-2));


const beschrijfGetal = (getal) => {
    if (getal > 0){
        return `${getal} is positief`
    }else if (getal < 0 ){
        return `${getal} is negatief`
    }else {
        return `${getal} is nul`
    }
}

console.log(beschrijfGetal(5));
console.log(beschrijfGetal(-3));
console.log(beschrijfGetal(0));


const berekenBMI = (gewicht, lengte) => {
   const bmi = gewicht / (lengte * lengte);
    if (bmi <= 18.5){
        return "Ondergewicht"
    }else if(bmi > 18.5 && bmi <= 24.9){
        return "Normaal gewicht"
    }else if (bmi >25 && bmi <= 29.9){
        return "Overgewicht"
    }else {
        return "Obesitas"
    }
}
console.log(berekenBMI(60, 1.70));
console.log(berekenBMI(50, 1.80));
console.log(berekenBMI(100, 1.75));



const berekenKorting = (prijs, kortingpercentage) => {
    if (prijs <= 0){
        return -1;
    }else if (kortingpercentage < 0 || kortingpercentage > 100){
        return -1;
    }else {
        return Number((prijs - (prijs * kortingpercentage / 100)).toFixed(2));
    }
}

console.log(berekenKorting(100, 20));
console.log(berekenKorting(49.99, 15));
console.log(berekenKorting(-10, 20));
console.log(berekenKorting(100, 110));




const bestellingTotaal = (producten, kortingspercentage, vipKlant) => {
   if (kortingspercentage <0 || kortingspercentage > 100){
       return -1;
       const totaal = producten.reduce((som, prijs) => som + prijs, 0);

   }

}
