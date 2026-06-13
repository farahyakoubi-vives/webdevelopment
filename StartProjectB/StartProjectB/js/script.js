let selectedUser = "";
let berichten = [];
let timer = null;

const vervangEmoji = (text) => {
    text = text.replaceAll(":)", "\u{1F604}");
    text = text.replaceAll(":p", "\u{1F608}");
    return text;
}

const setup = () => {
    if (!sessionStorage.getItem("selectedUser")) {
        const senders = ["Jeroen", "Leila", "Alex", "Aisha"];
        const randomSender = senders[Math.floor(Math.random() * senders.length)];
        sessionStorage.setItem("selectedUser", randomSender);
    }
    selectedUser = sessionStorage.getItem("selectedUser");
    document.getElementById("message-sender").value = selectedUser;

    laadBerichten();

    timer = setInterval(laadBerichten, 1000);

    document.getElementById("send-button").addEventListener("click", stuurBericht);

    document.getElementById("clear-all").addEventListener("click", () => {
        localStorage.removeItem("chatMessages");
        berichten = [];
        document.getElementById("chat-box").textContent = "";
    });

    document.getElementById("message-sender").addEventListener("change", (e) => {
        selectedUser = e.target.value;
        sessionStorage.setItem("selectedUser", selectedUser);
    });
}

const maakBerichtDiv = (sender, text, time) => {
    const div = document.createElement("div");
    div.className = "message";

    const spanTime = document.createElement("span");
    spanTime.className = "timestamp";
    spanTime.textContent = time;
}
