var wins = "";
var losses = "";
var ties = "";

var options = ["R", "P", "S"];


var startGame = function() {
    var userChoice = prompt("please choose R,P,S");
    if (!userChoice) {
        return;
    }
    
    userChoice = userChoice.toUpperCase();
    
    var randomIndex = Math.floor(Math.random() * options.length);
    var computerChoice = options[randomIndex];

    window.alert('Computer chose ' + computerChoice) {
        
    }

}
console.log(userChoice);
