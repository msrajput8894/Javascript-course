'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

//Starting conditions:
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let scores, currentScore, activePlayer, playing;

// Player switching function:
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Initial condtions function.
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //adding hidden class to dice image
  diceEl.classList.add('hidden');

  //removing active player class
  player1El.classList.remove('player--active');

  //removing winner class:
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

//calling init function at the start of the game:
init();

// Functionality for rolling a dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //displaying dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Switch player if dice = 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//functionality to hold the score by hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //Adding current score to score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //to finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;

      //Adding winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }

    //switching player
    switchPlayer();
  }
});

//functionality for new game button (Reset the game)
btnNew.addEventListener('click', init);
