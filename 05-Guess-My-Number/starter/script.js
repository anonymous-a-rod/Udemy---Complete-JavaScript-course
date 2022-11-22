'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value;

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let winStatus = false;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ No number!';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🥳';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    winStatus = true;

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    // too high or too low
  } else if (score > 0 && winStatus === false) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high! 📈';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low! 📉';
      score--;
    }
  }

  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You lose! 😭';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  winStatus = false;
});
