// Computer decision
function ComputerDecision() {
  //Randomize a number between 0, 1 and 2 and depending on the result each number gives a different choice.
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
  //Regex ensures that what the user enters is one of the valid choices
  let regexChoice = /ROCK|PAPER|SCISSORS/gi;
  let correct = false;
  let playerChoice = "";
  //only when the user enters a valid choice the while stops and returns the choice of the player
  while (!correct) {
    playerChoice = prompt("Rock , Paper , Scissors?")
    if (regexChoice.test(playerChoice)){
      correct = true;
      break;
    }
    alert("Wrong Choice");
  }
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}


// PlayRound
function PlayRound(ComputerDecision,PlayerDecision ) {
  console.log(ComputerDecision);
  console.log(PlayerDecision);
  //It compares each choice and gives the winner or draw depending on the case
  switch (ComputerDecision) {
    case "Rock":
      if (PlayerDecision == "paper") {
        return "Player Wins!";
      }else if (PlayerDecision == "scissors") {
        return "Computer Wins!";
      }else{
        return "Draw!";
      }
    case "Paper":
      if (PlayerDecision == "scissors") {
        return "Player Wins!";
      }else if (PlayerDecision == "rock") {
        return "Computer Wins!";
      }else{
        return "Draw!";
      }
    case "Scissors":
      if (PlayerDecision == "rock") {
        return "Player Wins!";
      }else if (PlayerDecision == "paper") {
        return "Computer Wins!";
      }else{
        return "Draw!";
      }
  }
}
console.log(PlayRound(ComputerDecision(),PlayerDecision()));

// Game (Function)