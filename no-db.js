var wordDisplay = document.getElementById("wordDisplay");
var keyboardDisplay = document.getElementById("keyboardDisplay");
var guessWord = document.getElementById("guessWord");
var guessButton = document.getElementById("guessButton");
var restartButton = document.getElementById("restartButton");
var livesRemaining = document.getElementById("livesRemaining");

var numGuesses = 0;

var wordBank = ["mouse", "software", "computer", "python", "keyboard", "code", "client", "desktop", "display", "html"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blanks = [];

var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);

// Loops through the selected word
for (var i = 0; i < currentWord.length; i++) {
  blanks.push("_");
  wordDisplay.innerHTML = blanks.join(" ");
}

// Creates an array of buttons for the alphabet
function loadAlphabet() {
  for (var z = 0; z < alphabet.length; z++) {
    var letterButtons = document.createElement("button");
    letterButtons.className = "letterButtons";
    letterButtons.innerHTML = alphabet[z];
    keyboardDisplay.appendChild(letterButtons);

    livesRemaining.innerHTML = "You have " + (7-numGuesses) + " lives remaining";

    letterButtons.addEventListener("click", function() {

      if (currentWord.indexOf(this.innerHTML) > -1) {

        this.style.backgroundColor = "#6ed651";
        var letterPosition = currentWord.indexOf(this.innerHTML);

        // Replaces the blank with the letter you clicked
        blanks[letterPosition] = this.innerHTML;
        wordDisplay.innerHTML = blanks.join(" ");

        // If all blanks are uncovered, you win
        if (wordDisplay.innerHTML === currentWord.split("").join(" ")){
          livesRemaining.innerHTML = "You win!";
          restartButton.innerHTML = "Play again";
        }

      } else {
        this.disabled = "true";
        this.style.backgroundColor = "#c43a17";
        numGuesses++;
        console.log("Wrong letter: " + this.innerHTML);
        console.log("Wrong guesses: " + numGuesses);
        livesRemaining.innerHTML = "You have " + (7-numGuesses) + " lives remaining";
        if (numGuesses > 7) {
          livesRemaining.innerHTML = "You ran out of lives!";
          alert("Game over");
          // Restarts the game if you lose
          location.reload();
        }
      }

    });
  }
}

// Restart button loads new game
restartButton.addEventListener("click", function(){
  location.reload();
});

// Guess the answer based on your text input
function guessAnswer() {
  numGuesses++;
  console.log("Total guesses: " + numGuesses);
  if (numGuesses > 7) {
    alert("Game over");
    location.reload();
  }

  if (guessWord.value === currentWord){
    livesRemaining.innerHTML = "You win!";
    restartButton.innerHTML = "Play again";
    location.reload();
  }

}

guessButton.addEventListener("click", guessAnswer);
guessWord.addEventListener("keyup", function(ev) {
  if (ev.keyCode === 13)
    guessAnswer();
});
