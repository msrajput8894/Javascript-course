'use strict';
/*
DOM: Document Object Model:- structured representation of HTML documents. allows javaScript to access HTML elements and styles to manipulate them.
*/
/*
//console.log(document.querySelector('.message'));

//document.querySelector is method to select an element with either id or class
//here it will select following element : <p class="message">Start guessing...</p>

//to select the text inside the element we will use .textContent
console.log(document.querySelector('.message').textContent);

//dom methods and properties are actually part of web api's and not the javascript.

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 16;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//actual code:
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //when there is no input.
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    //when number is correct.
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when number is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//To reset game by clicking on again button

document.querySelector('.again').addEventListener(
  'click',
  function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  },
  5000
);

//the above function is passed as an argument in addEventLister method. this function will only be called when the event is occurred.
