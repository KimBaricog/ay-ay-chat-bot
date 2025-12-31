const input = document.getElementById("input");
const container = document.getElementById("right-message");
const textmessage = document.getElementById("text-message");
const chatContainer = document.getElementById("login-card");

function send() {
  let rigthmessage = document.createElement("div");
  rigthmessage.id = "right-message";
  rigthmessage.innerHTML = `<img
              src="https://www.gravatar.com/avatar/?d=mp&s=200"
              alt="User Avatar"
            />`;
  textmessage.appendChild(rigthmessage);
  let youdiv = document.createElement("div");
  youdiv.className = "right";
  youdiv.innerHTML = `<p>${input.value}</p>`;
  rigthmessage.appendChild(youdiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  input.value = "";

  let Ai = [
    "Hello! How can I assist you today?",
    "I'm here to help! What do you need?",
    "Feel free to ask me anything.",
    "What would you like to know?",
    "I'm ready to assist you with your questions.",
  ];

  setTimeout(() => {
    let lefthmessage = document.createElement("div");
    lefthmessage.id = "left-message";
    lefthmessage.innerHTML = `<img
              src="static/ayay.png"
            />`;
    textmessage.appendChild(lefthmessage);
    let botdiv = document.createElement("div");
    botdiv.className = "left";

    const wrapper = document.createElement("div");
    wrapper.className = "dots-wrapper";
    const section = document.createElement("section");
    section.className = "dots-container";

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      section.appendChild(dot);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    wrapper.appendChild(section);
    botdiv.appendChild(wrapper);

    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * Ai.length);
      botdiv.innerHTML = `
            <p>${Ai[randomIndex]}</p>`;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 3000);

    textmessage.appendChild(lefthmessage);
    lefthmessage.appendChild(botdiv);
  }, 1000);
}
