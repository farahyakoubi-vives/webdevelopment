const setup = () => {
    const teamOnthouden = document.querySelector('#team-select');
    teamOnthouden.sessionStorage();

    const punten = document.getElementById('#punten-input');
    punten.addEventListener('click', () => {
        if (punten >= 0 ){
            foutmelding = document.getElementById('foutmelding fout');
        }
    })
}


window.addEventListener('load', setup);