const input = document.getElementById("input");
const container = document.getElementById("right-message");
const textmessage = document.getElementById("text-message");
const chatContainer = document.getElementById("login-card");
const imgIput = document.getElementById("image-input");
const message = document.getElementById("message");
const imgcon = document.getElementById("img-container1");

const btn = document.getElementById("btn");

imgIput.addEventListener("input", function imgsend() {
  let file = imgIput.files[0];
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  imgcon.appendChild(img);
  message.appendChild(imgcon);
});

input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
function send() {
  if (input.value.trim() === "") {
    return;
  }
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
  imgcon.remove();
  btn.style.display = "none";

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
  //imgsend
  function sendimg() {
    const file1 = imgIput.files[0];
    const imgCon1 = document.createElement("div");
    imgCon1.className = "img-container";

    const img1 = document.createElement("img");
    img1.src = URL.createObjectURL(file1);
    imgCon1.appendChild(img1);
    rigthmessage.appendChild(imgCon1);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  sendimg();

  imgIput.value = "";
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    send();
  }
});
