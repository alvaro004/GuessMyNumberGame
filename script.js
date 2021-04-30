'use strict';

// console.log(document.querySelector('.message').textContent);

// change the text content of the elemnt

// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// console.log(document.querySelector('.check').value);

const randomNumber = function () {
  return Number((Math.random() * 20).toFixed(0));
};

let conta = 0;
let mayor = conta;
let number = randomNumber();
// let number = Number((Math.random() * 20).toFixed(0)); //it's multiply by 20 because this is the range of the aleatory numbers
// const number = Math.trunc(Math.random() * 20) + 1; //we adding +1 because trunc returned only values minors to the number multiply in this case 20
// document.querySelector('.number').textContent = number;
document.querySelector('.score').textContent = 0;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  conta += 1;
  document.querySelector('.score').textContent = conta;
  console.log(guess, typeof guess);
  console.log(conta);

  if (!guess) {
    document.querySelector('.message').textContent = `there's not a value`;
    console.log(`there's not a value`);
  } else if (guess > number) {
    document.querySelector('.message').textContent = `Too High`;
  } else if (guess < number) {
    document.querySelector('.message').textContent = `Too Low`;
  } else if (guess === number) {
    document.querySelector('.message').textContent = `Yeah, Victory! 🎉`;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = conta;
    document.querySelector('.guess').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  document.querySelector('.message').textContent = `Start guessing...`;
  number = randomNumber();
  document.querySelector('.number').textContent = `?`;
  mayor = conta;
  conta = 0;
  document.querySelector('.score').textContent = conta;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ``;
  document.querySelector('.guess').disabled = false;

  if (conta) {
    document.querySelector('.highscore').textContent = conta;
  } else if (mayor < conta) {
    document.querySelector('.highscore').textContent = mayor;
  }
});
