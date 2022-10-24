//Player INFO
let playerTextChoice = document.querySelector('.playerChoice');
let playerTextScore = document.querySelector('.playerScore');
let playerScore = 0;
//Computer INFO
let computerTextChoice = document.querySelector('.computerChoice');
let computerTextScore = document.querySelector('.computerScore');
let computerScore = 0
//Results INFO
let roundTextResult = document.querySelector('.roundResult');
let winner = document.querySelector('.Winner');
let reset = document.querySelector('.reset')

//Know when the game is over
let gameOn = true;



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
let choices = document.querySelectorAll('.choice')

choices.forEach(choice => {
  let choiceValue = choice.getAttribute('id');
  choice.addEventListener('click', () => {

    if(gameOn){
      PlayRound(ComputerDecision(),choiceValue);     
    }
    
})})

// PlayRound
function PlayRound(ComputerDecision,PlayerDecision ) {
  computerTextChoice.textContent = ComputerDecision;
  playerTextChoice.textContent = PlayerDecision;

  let playerWinsRoundMessage = "Player wins round!";
  let computerWinsRoundMessage = "Computer wins round!";
  let drawRoundMessage = "This round is a draw!";

  //It compares each choice and gives the winner or draw depending on the case
  switch (ComputerDecision) {
    case "Rock":
      if (PlayerDecision == "Paper") {
        roundTextResult.textContent = playerWinsRoundMessage;
        ++playerScore;
        playerTextScore.textContent = playerScore;
      }else if (PlayerDecision == "Scissors") {
        roundTextResult.textContent = computerWinsRoundMessage;
        ++computerScore;
        computerTextScore.textContent = computerScore;
      }else{
        roundTextResult.textContent = drawRoundMessage;
      }
      keepScores();
      break;
    case "Paper":
      if (PlayerDecision == "Scissors") {
        roundTextResult.textContent = playerWinsRoundMessage;
        ++playerScore;
        playerTextScore.textContent = playerScore;
      }else if (PlayerDecision == "Rock") {
        roundTextResult.textContent = computerWinsRoundMessage;
        ++computerScore;
        computerTextScore.textContent = computerScore;
      }else{
        roundTextResult.textContent = drawRoundMessage;
      }
      keepScores();
      break;
    case "Scissors":
      if (PlayerDecision == "Rock") {
        roundTextResult.textContent = playerWinsRoundMessage;
        ++playerScore;
        playerTextScore.textContent = playerScore;
      }else if (PlayerDecision == "Paper") {
        roundTextResult.textContent = computerWinsRoundMessage;
        ++computerScore;
        computerTextScore.textContent = computerScore;
      }else{
        roundTextResult.textContent = drawRoundMessage;
      }
      keepScores();
      break;
  }
}

//Check if the player or computer reach 5 points and stops the game
function  keepScores() {
  if (computerScore == 5 || playerScore == 5) {
    gameOn = false
    if (computerScore == 5) {
      winner.textContent = "Computer Wins!"
    }
    if (playerScore == 5) {
      winner.textContent = "Player Wins!"
    }
  }
}

//Reset the game
reset.addEventListener('click', () =>{
  gameOn = true;
  roundTextResult.textContent = "";
  playerTextChoice.textContent = "";
  playerScore = 0;
  playerTextScore.textContent = playerScore;
  computerTextChoice.textContent = "";
  computerScore = 0;
  computerTextScore.textContent = computerScore;
  winner.textContent = "";
})