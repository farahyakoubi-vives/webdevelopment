let sliders = document.getElementsByClassName("slider");
let colorDemos = document.getElementsByClassName("colorDemo");

for (let i = 0; i < sliders.length; i++){
    sliders[i].addEventListener("input", update);
    sliders[i].addEventListener("change", update);
}

function update() {
    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    let kleur = "rgb(" + r + "," + g + "," + b + ")";

    colorDemos[0].style.backgroundColor = kleur;
}