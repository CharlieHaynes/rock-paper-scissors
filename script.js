let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === choices[0] &&
    computerSelection === choices[1]
  ) {
    return "Computer wins this round!";
  } else if (
    playerSelection.toLowerCase() === choices[1] &&
    computerSelection === choices[2]
  ) {
    return "Computer wins this round!";
  } else if (
    playerSelection.toLowerCase() === choices[2] &&
    computerSelection === choices[0]
  ) {
    return "Computer wins this round!";
  } else {
    return "You win this round!";
  }
}
