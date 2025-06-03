let humanScore = computerScore = 0;
let gameRestart = false;
const maxWidth = document.querySelector(".human-score").offsetWidth;

music = document.querySelector(".speaker-icon");
music.addEventListener("click", playAudio);

function getComputerSpell() {
  /*
   * Randomly returns grass, fire, water as the computers choice
   */
  let randomRps = Math.random();

  if (randomRps <= 0.33) {
    return "grass"
  } else if (randomRps <= 0.66) {
    return "fire"
  } else {
    return "water"
  }
}

function play(spell) {
  /*
   * Starts game and checks if it's over
   */
  const userSpell = document.querySelector(".user-spell");
  userSpell.src =`img/${spell}.gif`;
  userSpell.style.width = 20;
  userSpell.style.height = 20;

  playSoundEffect();

  if (humanScore === 0 && computerScore === 0) {
    document.querySelector(".js-winner").innerHTML = ''
  }

  if (gameRestart) {
    restartGame();
  } 

  const computerSpell = getComputerSpell();

  const compSpell = document.querySelector(".computer-spell");
  compSpell.src = `img/${computerSpell}.gif`;

  switch (computerSpell) {
    case "grass":
      fightGrass(computerSpell, spell);
      break;
    case "fire":
      fightFire(computerSpell, spell);
      break;
    case "water":
      fightWater(computerSpell, spell);
      break;
  }

  if (humanScore == 5 || computerScore == 5) {
    endGame();
  }
}

function fightGrass(computerSpell, spell) {
  /*
   * Tallies up user's points against a grass move
   */
  if (spell === "fire") {
    addHumanScore(computerSpell, spell);
  } else if (spell == "water") {
    addComputerScore(computerSpell, spell);
  } else {
    addTie();
  }
}

function fightFire(computerSpell, spell) {
  /*
   * Tallies up user's points against a water move
   */
  if (spell === "water") {
    addHumanScore(computerSpell, spell);
  } else if (spell == "grass") {
    addComputerScore(computerSpell, spell);
  } else {
    addTie();
  }
}

function fightWater(computerSpell, spell) {
  /*
   * Tallies up user's points against a fire move
   */
  if (spell === "grass") {
    addHumanScore(computerSpell, spell);
  } else if (spell == "fire") {
    addComputerScore(computerSpell, spell);
  } else {
    addTie();
  }
}

function addHumanScore(computerSpell, spell) {
  /*
   * Decrease computer health bar and announces the win
   */
  humanScore++;

  computerHealth = document.querySelector(".js-computer-health-bar");
  if (humanScore == 5) {
    computerHealth.style.width = "1px";
    document.querySelector(".js-round-winner").innerHTML = '';
    return;
  } else {
    let currentWidth = computerHealth.offsetWidth;
    computerHealth.style.width = (currentWidth - (maxWidth / 5)) + "px";
  }

  document.querySelector(".js-round-winner").innerHTML = `You won the round, ${spell} is super effective against ${computerSpell}!`;
}

function addComputerScore(computerSpell, spell) {
  /*
   * Decreases human health bar and announces the loss
   */
  computerScore++;

  userHealth = document.querySelector(".js-user-health-bar");
  
  let currentWidth = userHealth.offsetWidth;

  if (computerScore == 5) {
    userHealth.style.width = "1px";
    document.querySelector(".js-round-winner").innerHTML = '';
    return;
  } else {
    userHealth.style.width = (currentWidth - (maxWidth / 5)) + "px";
  }

  document.querySelector(".js-round-winner").innerHTML = `You lost the round, ${computerSpell} is stronger than ${spell}!`;
}

function addTie() {
  document.querySelector(".js-round-winner").innerHTML = `Tie.`;
}

function endGame() {
  /*
   * Resets everything and checks who won
   */
  if (humanScore > computerScore) {
    document.querySelector(".js-winner").innerHTML = `Game Over, you won :)`;
  } else if (humanScore < computerScore) {
    document.querySelector(".js-winner").innerHTML = `Game Over, computerina won :(`;
  }

  humanScore = computerScore = rounds = 0;
  gameRestart = true;
}

function restartGame() {
  /**
   * Restarts the game when user plays again
   */
    userHealth = document.querySelector(".js-user-health-bar");
    computerHealth = document.querySelector(".js-computer-health-bar");

    userHealth.style.width = "100%";
    computerHealth.style.width = "100%";
    
    document.querySelector(".js-winner").innerHTML = '';
    gameRestart = false;
}

function playAudio() {
  /**
   * When user clicks on the speakerIcon, it will
   * play/mute the music and change the icon to
   * speaker/mute  icon
   */

  audio = document.querySelector('.audio');
  speakerIcon = document.querySelector('.speaker-icon')

  audio.classList.toggle("music-on");

  if (audio.classList.contains("music-on")) {
    audio.play();
    speakerIcon.setAttribute('src', "img/speaker-icon.png");
  } else {
    audio.pause();
    speakerIcon.setAttribute('src', "img/mute-icon.png");
  }
}

function playSoundEffect() {
  const audio = new Audio("audio/magic.mp3");
  audio.play();
}
