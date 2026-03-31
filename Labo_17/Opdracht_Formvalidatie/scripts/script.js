const isGetal = (tekst) => !isNaN(tekst);

function setStatus(id, geldig, bericht) {
    const input = document.getElementById(id);
    const errEl = document.getElementById('err_' + id);
    if (geldig) {
        input.classList.remove('invalid');
        errEl.textContent = '';
    } else {
        input.classList.add('invalid');
        errEl.textContent = bericht;
    }
    return geldig;
}

function valideerVoornaam() {
    const val = document.getElementById('voornaam').value.trim();
    if (val.length > 30) return setStatus('voornaam', false, 'max. 30 karakters');
    return setStatus('voornaam', true, '');
}

function valideerFamilienaam() {
    const val = document.getElementById('familienaam').value.trim();
    if (val.length === 0) return setStatus('familienaam', false, 'verplicht veld');
    if (val.length > 50) return setStatus('familienaam', false, 'max 50 karakters');
    return setStatus('familienaam', true, '');
}

function valideerGeboortedatum() {
    const val = document.getElementById('geboortedatum').value.trim();
    if (val.length === 0) return setStatus('geboortedatum', false, 'verplicht veld');
    if (val.length !== 10) return setStatus('geboortedatum', false, 'formaat is niet jjjj-mm-dd');

    const jaar  = val.slice(0, 4);
    const sep1  = val.slice(4, 5);
    const maand = val.slice(5, 7);
    const sep2  = val.slice(7, 8);
    const dag   = val.slice(8, 10);

    if (sep1 !== '-' || sep2 !== '-')
        return setStatus('geboortedatum', false, 'formaat is niet jjjj-mm-dd');
    if (!isGetal(jaar) || jaar.length !== 4)
        return setStatus('geboortedatum', false, 'formaat is niet jjjj-mm-dd');
    if (!isGetal(maand) || Number(maand) <= 0)
        return setStatus('geboortedatum', false, 'formaat is niet jjjj-mm-dd');
    if (!isGetal(dag) || Number(dag) <= 0)
        return setStatus('geboortedatum', false, 'formaat is niet jjjj-mm-dd');

    return setStatus('geboortedatum', true, '');
}

function valideerEmail() {
    const val = document.getElementById('email').value.trim();
    if (val.length === 0) return setStatus('email', false, 'verplicht veld');

    let aantalAt = 0;
    let atPositie = -1;
    for (let i = 0; i < val.length; i++) {
        if (val[i] === '@') { aantalAt++; atPositie = i; }
    }

    if (aantalAt !== 1) return setStatus('email', false, 'geen geldig email adres');

    const voor = val.slice(0, atPositie);
    const na   = val.slice(atPositie + 1);
    if (voor.length < 1 || na.length < 1)
        return setStatus('email', false, 'geen geldig email adres');

    return setStatus('email', true, '');
}

function valideerAantalKinderen() {
    const val = document.getElementById('aantalKinderen').value.trim();
    if (val === '' || !isGetal(val)) return setStatus('aantalKinderen', false, 'is geen positief getal');
    const n = Number(val);
    if (n < 0)   return setStatus('aantalKinderen', false, 'is geen positief getal');
    if (n >= 99) return setStatus('aantalKinderen', false, 'is te vruchtbaar');
    return setStatus('aantalKinderen', true, '');
}

function valideer() {
    const v1 = valideerVoornaam();
    const v2 = valideerFamilienaam();
    const v3 = valideerGeboortedatum();
    const v4 = valideerEmail();
    const v5 = valideerAantalKinderen();
    if (v1 && v2 && v3 && v4 && v5) alert('proficiat!');
}