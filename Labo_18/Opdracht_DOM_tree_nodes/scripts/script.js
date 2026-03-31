// Het paragraaf-element ophalen via zijn id
const paragraaf = document.getElementById("abc");

// debugger pauzeert de code hier in de browser DevTools (F12)
// handig om de DOM-structuur stap voor stap te bekijken
debugger;

// Toon het volledige element in de console
console.log(paragraaf);

// Loop over alle kindnodes van de paragraaf
// childNodes bevat ALLE nodes: tekstnodes, elementnodes, commentaarnodes, ...
for (const node of paragraaf.childNodes) {
    // Node.TEXT_NODE = type 3 = gewone tekst (bv. "Hello World!" of witruimte)
    // We filteren zo enkel de tekstnodes eruit
    if (node.nodeType === Node.TEXT_NODE) {
        // JSON.stringify toont witruimte en enters zichtbaar (bv. "\n    Hello World!\n    ")
        console.log(JSON.stringify(node.nodeValue));
    }
}
