// Computer decision
function ComputerDecision() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
// Player decision
function PlayerDecision() {
  let regexChoice = /ROCK|PAPER|SCISSORS/gi;
  let correct = false;
  let playerChoice = "";
  while (!correct) {
    playerChoice = prompt("Rock , Paper , Scissors?")
    if (regexChoice.test(playerChoice)){
      correct = true;
      break;
    }
    alert("Wrong Choice")
  }
  playerChoice = playerChoice.toLowerCase()  
  return playerChoice
}

console.log(ComputerDecision());
console.log(PlayerDecision());
// PlayRound
// Game (Function)