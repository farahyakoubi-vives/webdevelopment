const meetduur = (naam, werk) => {
    console.time(naam);
    werk();
    console.timeEnd(naam);
};

