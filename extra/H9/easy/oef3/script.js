const tijd = () => {
    console.log("De tijd is om")
}
const taskId = setTimeout(tijd, 3000);

clearTimeout(taskId);