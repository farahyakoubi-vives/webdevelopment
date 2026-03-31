// Drie click-listeners koppelen aan dezelfde paragraaf
// Elke functie demonstreert een ander gedrag van 'this'
const setup = () => {
    document.getElementById("txtParagraaf").addEventListener("click",show);
    document.getElementById("txtParagraaf").addEventListener("click",showArrowFunctie);
    document.getElementById("txtParagraaf").addEventListener("click",showArrowFunctieTarget);
};
window.addEventListener("load", setup);


// GEWONE functie (function keyword)
// In een gewone event handler verwijst 'this' naar het HTML-element waarop geklikt werd
// → this = de paragraaf zelf → this.innerHTML werkt correct
function show ()
{
    //In event handlers, this refers to the HTML element that received the event:
  console.log("functie met keyword this : ", this.innerHTML);
}

// ARROW FUNCTIE
// In een arrow functie verwijst 'this' NIET naar het geklikt element
// maar naar de context waarin de functie gemaakt werd = het Window-object
// → this.innerHTML = undefined (Window heeft geen innerHTML)
// → this.innerWidth = de breedte van het browservenster (dat is een property van Window)
const showArrowFunctie = () =>
{
    console.log("arrow functie met keyword this : ", this.innerHTML); // je zal undefined krijgen -> je krijgt de Window-object terug
   // uitleg: https://wesbos.com/arrow-functions-this-javascript/

    console.log ("arrow functie met keyword this : ", this.innerWidth); // -> je zal de breedte van het scherm krijgen (innerWidth is een property van het Window object)

};


// OPLOSSING voor arrow functies: gebruik event.target in plaats van this
// event.target = het element waarop geklikt werd, werkt altijd ongeacht het functietype
const showArrowFunctieTarget = (event) => {

console.log("arrow functie met target : ",event.target.innerHTML);
}
;




