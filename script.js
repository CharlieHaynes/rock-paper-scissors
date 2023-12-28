let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose: rock, paper or scissors!");
  if (
    playerChoice.toLowerCase() !== choices[0] &&
    playerChoice.toLowerCase() !== choices[1] &&
    playerChoice.toLowerCase() !== choices[2]
  ) {
    alert("You typed a choice wrong, please try again!");
    return getPlayerChoice();
  } else {
    return playerChoice.toLowerCase();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === choices[0] && computerSelection === choices[1]) {
    return "Computer wins this round!";
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[2]
  ) {
    return "Computer wins this round!";
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[0]
  ) {
    return "Computer wins this round!";
  } else if (playerSelection === computerSelection) {
    return "This round is a draw!";
  } else {
    return "You win this round!";
  }
}

function game() {
  for (let i = 0; i <= 4; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("You chose: " + playerSelection);
    console.log("The computer chose: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
