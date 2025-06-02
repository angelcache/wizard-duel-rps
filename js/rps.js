humanScore = computerScore = 0;
gameRestart = false;

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


  if (gameRestart) {
    document.querySelector(".js-winner").innerHTML = '';
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
   * Adds +1 to humans score and announces the win
   */
  humanScore++;
  showScore();
  document.querySelector(".js-round-winner").innerHTML = `You Won the Round! ${spell} is stronger than ${computerSpell} :)`;
}

function addComputerScore(computerSpell, spell) {
  /*
   * Adds +1 to computers score and announces the loss
   */
  computerScore++;
  showScore();
  document.querySelector(".js-round-winner").innerHTML = `You Lost the Round! ${computerSpell} is stronger than ${spell} :(`;
}

function addTie() {
  document.querySelector(".js-round-winner").innerHTML = `The round is a tie.`;
}

function endGame() {
  /*
   * Resets everything and checks who won
   */
  if (humanScore > computerScore) {
    document.querySelector(".js-winner").innerHTML = `You Won the Battle! Congrats!`;
  } else if (humanScore < computerScore) {
    document.querySelector(".js-winner").innerHTML = `You Lost the Battle! Try Again.`;
  } else {
    document.querySelector(".js-winner").innerHTML = `The Battle is a Tie!`
  }

  humanScore = computerScore = rounds = 0;
  showScore();
}

function showScore() {
  /*
   * Shows the Human and Computer Score
   */
  document.querySelector(".js-human-score").innerHTML = `Human Score: ${humanScore}`;
  document.querySelector(".js-computer-score").innerHTML = `Computer Score: ${computerScore}`;
  gameRestart = true;
}