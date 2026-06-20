let teller = 0;

const logTik = () => {
    teller++;
    console.log("tik");

    if (teller == 5 ){
        clearInterval(taskId);
    }
}
const taskId = setInterval(logTik, 2000);