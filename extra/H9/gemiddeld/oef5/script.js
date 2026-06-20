let hp = 100;
const vijandAanval = () => {
    hp -= 10;
    if (hp<= 0){
        console.log("Speler is verslagen!");
        clearInterval(taskId);
    }
};

const taskId = setInterval(vijandAanval, 1000);
