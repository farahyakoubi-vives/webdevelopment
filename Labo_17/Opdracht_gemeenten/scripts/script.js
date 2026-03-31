let gemeenten = [];
let invoer = prompt("Geef een gemeente in");

while (invoer !== null && invoer.toLowerCase() !== "stop") {
    gemeenten.push(invoer);
    invoer = prompt("Geef een gemeente in");
}

gemeenten.sort((a, b) => a.localeCompare(b, 'nl'));

const select = document.getElementById('gemeenteSelect');
gemeenten.forEach(g => {
    const option = document.createElement('option');
    option.value = g;
    option.text = g;
    select.appendChild(option);
});