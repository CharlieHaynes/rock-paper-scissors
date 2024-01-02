let playerWin = 0;
let computerWin = 0;
let roundsPlayed = 0;
const choices = ["rock", "paper", "scissors"];

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const result = document.querySelector("#result");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

rockBtn.addEventListener("click", () => {
  playRound(choices[0], getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound(choices[1], getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound(choices[2], getComputerChoice());
});

function displayResult() {
  if (playerWin > computerWin && roundsPlayed >= 5) {
    result.textContent = `You win! With a final score of ${playerWin} to ${computerWin}.`;
  } else if (computerWin > playerWin && roundsPlayed >= 5) {
    result.textContent = `Computer wins! With a final score of ${computerWin} to ${playerWin}.`;
  } else if (roundsPlayed >= 5) {
    result.textContent = `Draw! With a final score of ${playerWin} to ${computerWin}.`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === choices[0] && computerSelection === choices[1]) {
    computerWin++;
    roundsPlayed++;
    result.textContent = `Computer wins this round! ${playerWin} - ${computerWin}`;
  } else if (
    playerSelection === choices[1] &&
    computerSelection === choices[2]
  ) {
    computerWin++;
    roundsPlayed++;
    result.textContent = `Computer wins this round! ${playerWin} - ${computerWin}`;
  } else if (
    playerSelection === choices[2] &&
    computerSelection === choices[0]
  ) {
    computerWin++;
    roundsPlayed++;
    result.textContent = `Computer wins this round! ${playerWin} - ${computerWin}`;
  } else if (playerSelection === computerSelection) {
    roundsPlayed++;
    result.textContent = `This round is a draw! ${playerWin} - ${computerWin}`;
  } else {
    playerWin++;
    roundsPlayed++;
    result.textContent = `You win this round! ${playerWin} - ${computerWin}`;
  }
  if (roundsPlayed >= 5) {
    displayResult();
    roundsPlayed = 0;
    playerWin = 0;
    computerWin = 0;
  }
  console.log(`Computer selected: ${computerSelection}`);
}
