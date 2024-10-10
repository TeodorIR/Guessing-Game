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
function playGame() {
  let answer, guess;
  let message;
  answer = Math.floor(Math.random() * 10) + 1;
  message = "Guess the number between 1 and 10";

  do {
    guess = prompt(message);
    if (guess === null) {
      alert("Game Over");
      return "Game Over"; // exit the function and end the game
    }

    if (isNaN(guess)) {
      alert("Please enter a number!");
      continue; // skip the rest of the loop and prompt again
    }

    guess = Number(guess); // Convert the guess to a number

    if (guess < answer) {
      message = "Too Low!";
    } else if (guess > answer) {
      message = "Too High!";
    } else {
      alert("Congratulations! You guessed the correct number.");
    }
  } while (guess != answer);
  return "Game Over";
}

/* function playGame() {
Set up the data

Initialise

Repeat
   User guesses
   Check and report

...until correct
} */
