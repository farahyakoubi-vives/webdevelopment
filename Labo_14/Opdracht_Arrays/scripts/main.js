const familie = ['Anna', 'Bram', 'Clara', 'David', 'Emma'];


console.log('Aantal familieleden:', familie.length);


console.log('Eerste:', familie[0]);
console.log('Derde:', familie[2]);
console.log('Vijfde:', familie[4]);


function VoegNaamToe(array, naam) {
    array.push(naam);
}


const extraNaam = prompt('Voer een extra familienaam in:');
VoegNaamToe(familie, extraNaam);


console.log('Array na toevoegen:', familie);


const familieString = familie.toString();
console.log('Familie als string:', familieString);
