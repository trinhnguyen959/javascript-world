'use strict';
const $ = document.querySelector.bind(document);
const text = 'textContent';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayValue = (className, message) => ($(className)[text] = message);

$('.check').addEventListener('click', function () {
	const guessValue = $('.guess').value;
	const guess = guessValue.trim() === '' ? '' : Number(guessValue);

	if (!guess) {
		displayValue('.message', '⛔️ No number!');
	} else if (guess === secretNumber) {
		displayValue('.message', '🎉 Correct Number!');
		displayValue('.number', secretNumber);
		// when player win
		$('body').style.backgroundColor = '#56C596';
		$('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			displayValue('.high-score', highScore);
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayValue(
				'.message',
				guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
			);
			score--;
			displayValue('.score', score);
		} else {
			displayValue('.message', '💥 You lost the game😏!');
			displayValue('.score', 0);
		}
	}
});

$('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	$('body').style.backgroundColor = '#222';
	displayValue('.message', 'Start guessing...');
	displayValue('.score', score);
	displayValue('.number', '?');
	$('.guess').value = '';
	$('.number').style.width = '15rem';
});
