const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + " ";
    }

    return result;
}

let tekst = "Hallo";
console.log(maakMetSpaties(tekst));

