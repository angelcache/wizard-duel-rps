const sectionChange = document.querySelectorAll("a");
const startSection = document.querySelector("#start");
const gameSection = document.querySelector("#game");
const rulesSection = document.querySelector("#rules");

sectionChange.forEach((section) => {
  section.addEventListener("click", playChangeEffect);
})

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", changeToRules);

const rulesIcon = document.querySelector(".rules-icon");
rulesIcon.addEventListener("click", changeToRules);

const homeIcon = document.querySelector(".home-icon");
homeIcon.addEventListener("click", changeToHome);

const gameIcon = document.querySelector(".game-icon")
gameIcon.addEventListener("click", changeToGame);

function playChangeEffect() {
  const audio = new Audio("audio/scroll.mp3");
  audio.play();
}


function changeToRules() {
  startSection.style.display = "none";
  rules
  gameSection.style.display = "none";
  rulesSection.style.display = "flex";
}

function changeToHome() {
  startSection.style.display = "flex";
  rules
  gameSection.style.display = "none";
  rulesSection.style.display = "none";
}

function changeToGame() {
  startSection.style.display = "none";
  rules
  gameSection.style.display = "flex";
  rulesSection.style.display = "none";
}