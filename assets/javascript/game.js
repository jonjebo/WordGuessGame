// Users words that can be guessed
var guesses = [
    "notebook",
    "basketball",
    "mountain",
    "peace",
    "telephone"
];

// Create alphabet constant 
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Guesses Randomizer 
var guesses = guesses [Math.floor(Math.random()* guesses.length)];

var userGuesses = [];
var submit = document.getElementById('submit');
var guessInput = document.getElementById('letterGuess');

var word = guesses;

function userMakesGuess() {
    var userGuess = guessInput.value;    
    userGuesses.push(userGuess);
    console.log(userGuesses);
    for (var j = 0; j < word.length; j++) {
        console.log(word[j]);
        if (userGuess.charCodeAt(0) === word[j].charCodeAt(0)) {
            console.log('yay');
        } else {
            console.log('no');
        }
    } 
}