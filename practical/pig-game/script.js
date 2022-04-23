'use strict';

const $ = document.querySelector.bind(document);

const scoreZeroEl = $('#score--0');
const scoreOneEl = $('#score--1');
const diceEl = $('.dice');
const btnNew = $('.btn--new');
const btnRoll = $('.btn--roll');
const btnHold = $('.btn--hold');
const playerZeroEl = $('.player--0');
const playerOneEl = $('.player--1');

// init
let scores;
let currentScore;
let activePlayer;
let isPlaying;

const init = () => {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	isPlaying = true;

	diceEl.classList.add('hidden');

	scoreZeroEl.textContent = 0;
	scoreOneEl.textContent = 0;
	$('#current--0').textContent = 0;
	$('#current--1').textContent = 0;

	playerZeroEl.classList.remove('player--winner');
	playerZeroEl.classList.add('player--active');
	playerOneEl.classList.remove('player--winner');
	playerOneEl.classList.remove('player--active');
};

init();

const switchPlayer = () => {
	$(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	playerZeroEl.classList.toggle('player--active');
	playerOneEl.classList.toggle('player--active');
};

// rolling dice
btnRoll.addEventListener('click', () => {
	if (isPlaying) {
		// generate random dice roll
		const dice = Math.trunc(Math.random() * 6) + 1;

		// display dice
		diceEl.classList.remove('hidden');
		diceEl.src = `dice-${dice}.png`;

		// check roll, if 1 switch player
		if (dice !== 1) {
			// add dice to current score
			currentScore += dice;
			$(`#current--${activePlayer}`).textContent = currentScore;
		} else {
			// switch player
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', () => {
	if (isPlaying) {
		// add current score to active player
		scores[activePlayer] += currentScore;
		$(`#score--${activePlayer}`).textContent = scores[activePlayer];

		// check score if >= 100
		if (scores[activePlayer] >= 100) {
			isPlaying = false;
			diceEl.classList.add('hidden');
			$(`.player--${activePlayer}`).classList.add('player--winner');
			$(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
			// switch to the next player
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', () => {
	init();
});
