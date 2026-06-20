const data = '{"titel":"Inception","regisseur":"Christopher Nolan","jaar":2010}';

const film = JSON.parse(data);

console.log(film["titel"]);