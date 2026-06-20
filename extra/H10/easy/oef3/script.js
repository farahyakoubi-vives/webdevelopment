const boek = {
    titel: "1984",
    auteur: "George Orwell",
    jaar: 1949
};

boek.genre = "Dystopie";

const boekJSON = JSON.stringify(boek);
console.log(boekJSON);