function goodbyeOverlay() {
  document.getElementById("overlay");
  overlay.style.display = "none";
}

overlayClear.addEventListener("click", goodbyeOverlay);

const userChoiceSelector = document.getElementById("userChoice");
const playButton = document.getElementById("playButton");

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

//user clicks button
//computer randomly chooses

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

let compNumber = getRandomNumber();
console.log(compNumber);
// console.log

let compChoice;
function chooseCompHand() {
  if (compNumber === 1) {
    document.getElementById("compImg").src = "./images/compRock.png";
    compResult.textContent = `The computer chose rock`;
    return (compChoice = "compRock");
  } else if (compNumber === 2) {
    document.getElementById("compImg").src = "./images/compPaper.png";
    compResult.textContent = `The computer chose paper`;
    return (compChoice = "compPaper");
  } else if (compNumber === 3) {
    document.getElementById("compImg").src = "./images/compScissors.png";
    compResult.textContent = `The computer chose scissors`;
    return (compChoice = "compScissors");
  }
}

shootButton.addEventListener("click", chooseCompHand);

console.log(`The computer chose ${compChoice}`);
