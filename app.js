const userChoiceSelector = document.getElementById("userChoice");
const playButton = document.getElementById("playButton");
//unneccesary? vv
const shootButton = document.getElementById("shootButton");
const userResult = document.getElementById("userResult");
const compResult = document.getElementById("compResult");
const roundResult = document.getElementById("roundResult");
const compImg = document.getElementById("compImg");
const overlayClear = document.getElementById("overlayClear");

let playerScore = 0;
let computerScore = 0;

function playRound(userChoice, compChoice) {
  if (userChoice === compChoice) {
    roundResult.textContent = "It's a tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    playerScore++;
    roundResult.textContent = "User wins!";
  } else {
    computerScore++;
    roundResult.textContent = "Computer wins!";
  }
}

overlayClear.addEventListener("click", goodbyeOverlay);
function goodbyeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function chooseUserHand() {
  const userChoice = userChoiceSelector.value;
  userResult.textContent = `You chose ${userChoice}`;
  if (userChoice === "rock") {
    document.getElementById("userImg").src = "./images/userRock.png";
  } else if (userChoice === "paper") {
    document.getElementById("userImg").src = "./images/userPaper.png";
  } else if (userChoice === "scissors") {
    document.getElementById("userImg").src = "./images/userScissors.png";
  }
}

playButton.addEventListener("click", chooseUserHand);

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function chooseCompHand() {
  const compNumber = getRandomNumber();

  if (compNumber === 1) {
    compImg.src = "./images/compRock.png";
    compResult.textContent = "The computer chose rock";
    return "rock";
  } else if (compNumber === 2) {
    compImg.src = "./images/compPaper.png";
    compResult.textContent = "The computer chose paper";
    return "paper";
  } else {
    compImg.src = "./images/compScissors.png";
    compResult.textContent = "The computer chose scissors";
    return "scissors";
  }
}

shootButton.addEventListener("click", function () {
  const userChoice = userChoiceSelector.value;
  const compChoice = chooseCompHand();
  playRound(userChoice, compChoice);
});

//local stoarge can remember how many times the user and comp have won and gived back a statistical likelyhood of winning?
