const laatste = document.getElementById('fruitlijst');
console.log(laatste.children[laatste.children.length-1].firstChild.nodeValue);

const nieuw = document.createElement('li');
nieuw.innerText = "Peer";
laatste.appendChild(nieuw);
