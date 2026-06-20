const setup = () => {
    const cijfers = [6, 3, 5, 8, 12, 18];

    const lijst = document.getElementById('cijferlijst');
    const gemiddelde = document.getElementById('gemiddelde');

    let som = 0;
    for (let i = 0; i <cijfers.length; i++){
      const newLi =   document.createElement('li');
      const newcijfer = cijfers[i];
      lijst.appendChild(newLi);

      som = som + cijfers[i];


    }
    gem = som / cijfers.length;
    gem.toFixed(2)
}

window.addEventListener('load', setup)