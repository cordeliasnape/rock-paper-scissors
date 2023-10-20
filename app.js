const userChoiceSelector = document.getElementById("userChoice");
const playButton = document.getElementById("playButton");
//unneccesary? vv
const restartButton = document.getElementById("restartButton");
const shootButton = document.getElementById("shootButton");
const userResult = document.getElementById("userResult");
const compResult = document.getElementById("compResult");
const roundResult = document.getElementById("roundResult");
const instruction = document.getElementById("instruction");
const compImg = document.getElementById("compImg");
const overlayClear = document.getElementById("overlayClear");
const userPointsScoreElement = document.getElementById("userPointsScore");
const computerPointsScoreElement = document.getElementById(
  "computerPointsScore"
);
const userTotalGamesWonElement = document.getElementById("userTotalGamesWon");
const computerTotalGamesWonElement = document.getElementById(
  "computerTotalGamesWon"
);

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;
let userGamesWon = 0;
let compGamesWon = 0;
let playerTotalGamesWon = 0;
let computerTotalGamesWon = 0;

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
  roundsPlayed++;

  userPointsScoreElement.textContent = `User Points: ${playerScore}`;
  computerPointsScoreElement.textContent = `Computer Points: ${computerScore}`;

  if (roundsPlayed === totalRounds) {
    if (playerScore > computerScore) {
      roundResult.textContent = "User wins the game!";
      userGamesWon++;
      playerTotalGamesWon++;
    } else if (computerScore > playerScore) {
      roundResult.textContent = "Computer wins the game!";
      compGamesWon++;
      computerTotalGamesWon++;
    } else {
      roundResult.textContent = "It's a tie game!";
    }

    // playerTotalGamesWon += playerScore;
    // computerTotalGamesWon += computerScore;

    userTotalGamesWonElement.textContent = `User Total Games Won: ${playerTotalGamesWon}`;
    computerTotalGamesWonElement.textContent = `Computer Total Games Won: ${computerTotalGamesWon}`;

    shootButton.style.display = "none";
    restartButton.style.display = "block";
    instruction.style.display = "block";
  }
}

restartButton.addEventListener("click", function () {
  restartButton.style.display = "none";
  shootButton.style.display = "block";
  totalRounds = 5;
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  roundResult.textContent = "";
  roundResult.style.display = "none";
  instruction.style.display = "block";

  // localStorage.setItem("userGamesWon", userGamesWon);
  // localStorage.setItem("compGamesWon", compGamesWon);
  playRound;
});

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
  roundResult.style.display = "block";
  instruction.style.display = "none";
});

// window.addEventListener("load", function () {
//   const playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
//   const computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
//   const userGamesWon = parseInt(localStorage.getItem("userGamesWon")) || 0;
//   const compGamesWon = parseInt(localStorage.getItem("compGamesWon")) || 0;
//   playerScore += playerScore;
//   computerScore += computerScore;
//   userGamesWon += userGamesWon;
//   compGamesWon += compGamesWon;
// });

//local stoarge can remember how many times the user and comp have won and gived back a statistical likelyhood of winning?
