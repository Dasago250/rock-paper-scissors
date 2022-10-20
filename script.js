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

  let playerWinsRoundMessage = "Player wins round!";
  let computerWinsRoundMessage = "Computer wins round!";
  let drawRoundMessage = "This round is a draw!";
  //It compares each choice and gives the winner or draw depending on the case
  switch (ComputerDecision) {
    case "Rock":
      if (PlayerDecision == "paper") {
        console.log(playerWinsRoundMessage);
        return "Player";
      }else if (PlayerDecision == "scissors") {
        console.log(computerWinsRoundMessage);
        return "Computer";
      }else{
        console.log(drawRoundMessage);
        return "Draw";
      }
    case "Paper":
      if (PlayerDecision == "scissors") {
        console.log(playerWinsRoundMessage);
        return "Player";
      }else if (PlayerDecision == "rock") {
        console.log(computerWinsRoundMessage);
        return "Computer";
      }else{
        console.log(drawRoundMessage);
        return "Draw";
      }
    case "Scissors":
      if (PlayerDecision == "rock") {
        console.log(playerWinsRoundMessage);
        return "Player";
      }else if (PlayerDecision == "paper") {
        console.log(computerWinsRoundMessage);
        return "Computer";
      }else{
        console.log(drawRoundMessage);
        return "Draw";
      }
  }
}

// Game (Function)

function Game() {
  let winnerRound = "";
  let playerScore = 0;
  let computerScore = 0;
  //Keeps score of each rounds winner 
  for (let i = 0; i < 5; i++) {
    winnerRound = PlayRound(ComputerDecision(),PlayerDecision());
    console.log("");
    switch (winnerRound) {
      case "Player":
        playerScore++;
        break;
      case "Computer":
        computerScore++;
        break;
      default:
        break;
    }
  }
  //Compares the scores and prints the winner or in case a draw.
  console.log(`Player's score: ${playerScore} - Computer's score: ${computerScore}\n`);
  if (computerScore > playerScore){
    console.log("Computer wins the game!");
  }else if (playerScore > computerScore) {
    console.log("Player wins the game!");
  }else{
    console.log("It's a draw...");
  }
}

Game();