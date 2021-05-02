'use strict';
// this function return a random number
const randomNumber = function () {
  return Number((Math.random() * 20).toFixed(0));
};
//this function return the score less one
const reduceScore = function (score) {
  return (score -= 1);
};
// this function verifies if your lose and then change some properties
const checkYourLose = function (score) {
  if (score === 0) {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = `You loose the game! 😔`;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
};
//this function compare if the currente score is greathern than the highscore and then displayed
const compairScore = function (score) {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

// let number = Number((Math.random() * 20).toFixed(0)); //it's multiply by 20 because this is the range of the aleatory numbers
// const number = Math.trunc(Math.random() * 20) + 1; //we adding +1 because trunc returned only values minors to the number multiply in this case 20
// document.querySelector('.number').textContent = secretNumber;

//this code bloque will be executed if the check button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //if the user submit a wrong answer
  if (!guess) {
    document.querySelector('.message').textContent = `there's not a value`;
  } //if the user introduce a high or low number
  else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? `Too High` : `Too Low`;
    score = reduceScore(score);
    document.querySelector('.score').textContent = score;
    checkYourLose(score);
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Yeah, Victory! 🎉`;
    score = reduceScore(score);
    compairScore(score);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#4ca432';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
});

//this code will be executed if the again button is clicked
document.querySelector('.again').addEventListener('click', function () {
  if (score !== 20) {
    compairScore(score);
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = `Start guessing...`;
    secretNumber = randomNumber();
    document.querySelector('.number').textContent = `?`;
    document.querySelector('body').style.backgroundColor = '#6b6a6a';
    document.querySelector('.guess').value = ``;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
  }
});
window.alert(
  `If you're in a phone, for a better experience you should activate the desktop mode`
);
