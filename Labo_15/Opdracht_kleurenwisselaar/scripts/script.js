let knoppen = document.querySelectorAll(".kleurknop");

knoppen.forEach(function (knop){
    knop.addEventListener("click", function (){
        knop.classList.toggle("blauw");
    });
});



