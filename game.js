/* game.js
This is the JavaScript file for our guessing game. */

"use strict";

window.onerror = function (message, url, line) {
  alert(`Error: ${message}\n${url}: ${line}`);
};

init();
function init() {
  let button = document.querySelector("button#startgame");
  button.onclick = playGame;
}

/* function playGame() {
Set up the data

Initialise

Repeat
   User guesses
   Check and report

...until correct
} */

function playGame() {
  let answer, guess;
  answer = 57;

  do {
    guess = prompt("Guess the number between 1 and 100");
    if (guess < answer) {
      alert("Too low!");
    } else if (guess > answer) {
      alert("Too high!");
    } else {
      alert("Congratulations! You guessed the correct number.");
      break;
    }
  } while (guess != answer);
}
