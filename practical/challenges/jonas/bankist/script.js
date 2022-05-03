'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};
const $ = document.querySelector.bind(document);
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = $('.welcome');
const labelDate = $('.date');
const labelBalance = $('.balance__value');
const labelSumIn = $('.summary__value--in');
const labelSumOut = $('.summary__value--out');
const labelSumInterest = $('.summary__value--interest');
const labelTimer = $('.timer');

const containerApp = $('.app');
const containerMovements = $('.movements');

const btnLogin = $('.login__btn');
const btnTransfer = $('.form__btn--transfer');
const btnLoan = $('.form__btn--loan');
const btnClose = $('.form__btn--close');
const btnSort = $('.btn--sort');

const inputLoginUsername = $('.login__input--user');
const inputLoginPin = $('.login__input--pin');
const inputTransferTo = $('.form__input--to');
const inputTransferAmount = $('.form__input--amount');
const inputLoanAmount = $('.form__input--loan-amount');
const inputCloseUsername = $('.form__input--user');
const inputClosePin = $('.form__input--pin');

const displayMovements = function (movements) {
	containerMovements.innerHTML = '';
	movements.forEach((move, i) => {
		const type = move > 0 ? 'deposit' : 'withdrawal';
		const html = `
			<div class="movements__row">
			<div class="movements__type movements__type--${type}">
				${i + 1} ${type}
			</div>
<!--				<div class="movements__date">3 days ago</div>-->
			<div class="movements__value">${move}€</div>
		`;
		// append to html
		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

const calcDisplayBalance = movements =>
	(labelBalance.textContent = `${movements.reduce(
		(acc, mov) => acc + mov,
		0
	)} €`);

const calcDisplaySummary = movements => {
	const incomes = movements
		.filter(mov => mov > 0)
		.reduce((acc, move) => acc + move, 0);
	labelSumIn.textContent = `${incomes} €`;

	const outcomes = movements
		.filter(mov => mov < 0)
		.reduce((acc, move) => acc + move, 0);
	labelSumOut.textContent = `${Math.abs(outcomes)} €`;

	const calInterested = deposit => {
		const interested = (deposit * 1.2) / 100;
		return interested > 1 ? interested : 0;
	};

	labelSumInterest.textContent = `${movements
		.reduce((result, mov) => {
			if (mov > 0) {
				result.push(calInterested(mov));
			}
			return result;
		}, [])
		.reduce((acc, int) => acc + int, 0)} €`;
};

displayMovements(account1.movements);
calcDisplayBalance(account1.movements);
calcDisplaySummary(account1.movements);

const createUserName = accounts =>
	accounts.forEach(
		account =>
			(account.username = account.owner
				.toLowerCase()
				.split(' ')
				.map(el => el.charAt(0))
				.join(''))
	);

createUserName(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
///////////////////////////////////////////
