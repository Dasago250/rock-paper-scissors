// Computer decision
function computerDecision() {
  let decision = Math.floor(Math.random() * 3);
  switch (decision) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
// Player decision
// PlayRound
// Game (Function)