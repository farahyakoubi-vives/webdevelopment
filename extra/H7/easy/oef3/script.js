const setup = () => {
    const btn = document.getElementById('wisselBtn');
    btn.addEventListener('click', wissel);
};

const wissel = () => {
    const lampje = document.getElementById('lampje');
    const btn = document.getElementById('wisselBtn');

    if(lampje.style.backgroundColor == 'gray'){
        btn.textContent = "Zet aan";
        lampje.style.backgroundColor = "yellow";
    }else {
        btn.textContent = "Zet uit";
        lampje.style.backgroundColor = "gray";
    }
};

window.addEventListener('load', setup);