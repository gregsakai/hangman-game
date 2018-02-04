var wordDisplay = document.getElementById("wordDisplay");
var keyboardDisplay = document.getElementById("keyboardDisplay");
var guessWord = document.getElementById("guessWord");
var submitLetter = document.getElementById("submitLetter");

var numGuesses = 0;

var wordBank = ["mouse", "software", "computer", "hardware", "keyboard", "battery", "screen", "desktop", "display", "program"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blanks = [];

var currentWord = wordBank[Math.floor(Math.random() * 10)];
console.log(currentWord);

// Loops through the selected word
for (var i = 0; i < currentWord.length; i++) {

  blanks.push("_ ");
  blanks.join(" ");
  wordDisplay.innerHTML = "subject: technology<br/>" + blanks.join(" ");

}

// Creates an array of buttons for the alphabet
function loadAlphabet() {
  for (var z = 0; z < alphabet.length; z++) {
    var letterButtons = document.createElement("button");
    letterButtons.innerHTML = alphabet[z];
    keyboardDisplay.appendChild(letterButtons);


    letterButtons.addEventListener("click", function() {


      console.log(this.innerHTML);

    });
  }
}

function guessLetter() {
  numGuesses++;
  console.log(numGuesses);
  if (numGuesses > 7) {
    console.log("Game over");
  }

  if (guessWord.value === currentWord)
    alert("winner");

}

submitLetter.addEventListener("click", guessLetter);
