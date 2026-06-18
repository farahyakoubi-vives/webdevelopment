const h2 = document.querySelector('h2');
console.log(h2.firstChild.nodeValue);


const header = document.getElementById('header');
console.log(header.firstChild.nodeValue);

const tips = document.getElementsByClassName('highlight');
console.log(tips[1].firstChild.nodeValue);
console.log(tips.length);

const items = document.getElementsByTagName('li');
console.log(items[2].firstChild.nodeValue);

const active = document.querySelector('.active');
console.log(active.firstChild.nodeValue);
const element = document.querySelector('a');
console.log(element.firstChild.nodeValue);

const links = document.querySelectorAll('.menu li');
console.log(links.length);
console.log(links[1].firstChild.nodeValue);


const cards = document.getElementById('cards');
console.log(cards.children.length);
console.log(cards.children[0].firstChild.nodeValue);

const eersteP = document.querySelector('main p');
console.log(eersteP.nextElementSibling);
console.log(eersteP.previousSibling);

const h3 = document.querySelector('h3');
const ouder = h3.parentElement;
console.log(ouder.id);
console.log(h3.nextElementSibling.firstChild.nodeValue);

const titel = document.getElementById('titel');
titel.innerText = 'Nieuwe Titel';
const inhoud = document.getElementById('inhoud');
inhoud.innerHTML = '<p><strong>Oude Tekst</strong> </p>'

const div = document.createElement('div');

const img = document.createElement('img');

div.innerText = "Hallo wereld! ";
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvhz8bFmFa46vy1oC8-hByVsrEe5B54Ygqg&s');
img.setAttribute('alt', 'Een foto');
document.querySelector('body').appendChild(div);

const nieuweli = document.createElement('li');
nieuweli.innerText = 'Nieuwe item';
document.querySelector('#lijst').appendChild(nieuweli);