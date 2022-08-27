var wins = "";
var losses = "";
var ties = "";

var options = ["R", "P", "S"];

var startGame = function () {
  var userChoice = prompt("please choose R,P,S");
  if (!userChoice) {
    return;
  }

  userChoice = userChoice.toUpperCase();

  var randomIndex = Math.floor(Math.random() * options.length);
  var computerChoice = options[randomIndex];

  window.alert("Computer chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("Its a tie");
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You Win!");
  } else {
    losses++;
    window.alert("You Lose!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var playAgain = window.confirm("Play Again?");

  if (playAgain) {
    startGame();
  }
};
