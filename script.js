let playerScore = 0;
let compScore = 0;

// Reset button trigger
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);

// Rock, Paper, and Scissor button triggers
const rockButton = document.getElementById("rock-button");
rockButton.addEventListener("click", newGame);

const paperButton = document.getElementById("paper-button");
paperButton.addEventListener("click", newGame);

const scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener("click", newGame);

// Score and battleground reference
const playerScoreElement = document.getElementById("player-score");
const compScoreElement = document.getElementById("comp-score");
const battlegroundElement = document.getElementById("battle-ground");

// Result and instruction reference
const resultElement = document.getElementById("result-display");
const instructionElement = document.getElementById("instruction-display");

function newGame(event) {
  console.log("Starting new game");

  // Player choice
  const playerChoice = event.target.name;
  let playerChampion = event.target.cloneNode(true);
  playerChampion.setAttribute("id", "player-champion");
  battlegroundElement.appendChild(playerChampion);

  // Computer choice
  const compChoice = compChoose();
  let compChampion = document
    .getElementById(compChoice + "-button")
    .cloneNode(true);
  compChampion.setAttribute("id", "comp-champion");
  battlegroundElement.appendChild(compChampion);

  console.log("Player chose " + playerChoice);
  console.log("Computer chose " + compChoice);

  // Figure out who won
  let result = {
    winner: "",
    winChoice: "",
    loseChoice: "",
  };
  switch (true) {
    // Tie
    case playerChoice === compChoice:
      result.winner = "tie";
      result.winChoice = playerChoice;
      result.loseChoice = compChoice;
      break;

    // Player wins
    case playerChoice === "rock" && compChoice === "scissors":
    case playerChoice === "paper" && compChoice === "rock":
    case playerChoice === "scissors" && compChoice === "paper":
      result.winner = "player";
      result.winChoice = playerChoice;
      result.loseChoice = compChoice;
      // playerChampion.classList.add("winner");
      // compChampion.classList.add("loser");
      break;

    // Computer wins
    case playerChoice === "rock" && compChoice === "paper":
    case playerChoice === "paper" && compChoice === "scissors":
    case playerChoice === "scissors" && compChoice === "rock":
      result.winner = "computer";
      result.winChoice = compChoice;
      result.loseChoice = playerChoice;
      // playerChampion.classList.add("loser");
      // compChampion.classList.add("winner");
      break;
  }
  console.log("The winner is: " + result.winner);

  // Process results of game
  if (result.winner === "tie") {
    resultElement.innerHTML =
      "Tie, " + result.winChoice + " doesn't beat " + result.loseChoice + ".";
  } else {
    resultElement.innerHTML =
      result.winner[0].toUpperCase() +
      result.winner.slice(1) +
      " wins, " +
      result.winChoice +
      " beats " +
      result.loseChoice +
      ".";
    updateScore(result.winner);
  }

  // Decide how to handle next game
  if (playerScore >= 5 || compScore >= 5) {
    updateScore("end");
    resetGame();
    resultElement.innerHTML = ("Game over! " + result.winner[0].toUpperCase() + result.winner.slice(1) + " wins the tournament!");
  } 
  showResetButton();
}

// Reset game, prepare for next round
function resetGame() {
  console.log("Clearing the board");

  // Clear battleground
  while (battlegroundElement.firstChild) {
    battlegroundElement.removeChild(battlegroundElement.firstChild);
  }

  // Toggle button visibility
  resetButton.style.display = "none";
  rockButton.style.display = "inline-block";
  paperButton.style.display = "inline-block";
  scissorsButton.style.display = "inline-block";

  // Update instructions and results
  instructionElement.innerHTML = "Click to choose";
  resultElement.innerHTML = "";
}

function showResetButton() {
  // Toggle button visibility
  resetButton.style.display = "inline-block";
  rockButton.style.display = "none";
  paperButton.style.display = "none";
  scissorsButton.style.display = "none";

  // Update instructions and results
  instructionElement.innerHTML = "Click to play again";
}

// Get a random choice from the computer
function compChoose() {
  let compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return 1;
  }
}

// Update score based on results
function updateScore(winner) {
  if (winner === "player") {
    playerScoreElement.innerHTML = ++playerScore;
  } else if (winner === "computer") {
    compScoreElement.innerHTML = ++compScore;
  } else  if (winner === "end") {
    playerScore = 0;
    compScore = 0;
    playerScoreElement.innerHTML = playerScore;
    compScoreElement.innerHTML = compScore;
  }
}
