const product = document.getElementsByClassName("product");
const newProduct = document.createElement('p');
newProduct.className = "product";
const winkelmand = document.getElementById("winkelmandje");
winkelmand.appendChild(newProduct);
console.log(product.length);