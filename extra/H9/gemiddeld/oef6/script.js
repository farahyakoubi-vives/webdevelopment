const wachtEnDoe = (seconden, bericht) => {
    setTimeout(() => {
        console.log(bericht);
    }, seconden * 1000);
};
wachtEnDoe(2, 'Twee seconden voorbij!');
wachtEnDoe(5, 'Vijf seconden voorbij!');

