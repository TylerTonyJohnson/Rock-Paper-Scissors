// document.addEventListener("DOMContentLoaded", playRound());

const computerPlay = () => {
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
};

const playRound = () => {
  const userPlay = "rock";
  const compPlay = computerPlay();

  switch (true) {
    case userPlay === compPlay:
      console.log("Tie");
      break;
    case userPlay === "rock" && compPlay === "paper":
      console.log("Computer Wins! Paper beats rock");
      break;
    case userPlay === "rock" && compPlay === "scissors":
      console.log("Player Wins! Rock beats scissors");
      break;
    case userPlay === "paper" && compPlay === "rock":
      console.log("Player Wins! Paper beats rock");
      break;
    case userPlay === "paper" && compPlay === "scissors":
      console.log("Computer Wins! Scissors beats paper");
      break;
    case userPlay === "scissors" && compPlay === "rock":
      console.log("Computer Wins! Rock beats scissors");
      break;
    case userPlay === "scissors" && compPlay === "paper":
      console.log("Player Wins! Scissors beats paper");
      break;
  }
};

document.getElementById("newGame").addEventListener("click", playRound());
