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
	movementsDates: [
		'2019-11-18T21:31:17.178Z',
		'2019-12-23T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2020-05-08T14:11:59.604Z',
		'2020-07-26T17:01:17.194Z',
		'2020-07-28T23:36:17.929Z',
		'2020-08-01T10:51:36.790Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
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

const displayMovements = function (acc, sort = false) {
	containerMovements.innerHTML = '';

	const moves = sort
		? acc.movements.slice().sort((a, b) => a - b)
		: acc.movements;

	moves.forEach((move, i) => {
		const type = move > 0 ? 'deposit' : 'withdrawal';
		const date = new Date(acc.movementsDates[i]);
		const displayDate = formatDate(date);
		const html = `
			<div class="movements__row">
			<div class="movements__type movements__type--${type}">
				${i + 1} ${type}
			</div>
			<div class="movements__date">${displayDate}</div>
			<div class="movements__value">${move.toFixed(2)}€</div>
		`;
		// append to html
		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};

const calcDisplayBalance = account => {
	account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
	return (labelBalance.textContent = `${account.balance.toFixed(2)} €`);
};

const calcDisplaySummary = account => {
	const incomes = account.movements
		.filter(mov => mov > 0)
		.reduce((acc, move) => acc + move, 0);
	labelSumIn.textContent = `${incomes.toFixed(2)} €`;

	const outcomes = account.movements
		.filter(mov => mov < 0)
		.reduce((acc, move) => acc + move, 0);
	labelSumOut.textContent = `${Math.abs(outcomes)} €`;

	const calInterested = deposit => {
		const interested = (deposit * account.interestRate) / 100;
		return interested > 1 ? interested : 0;
	};

	labelSumInterest.textContent = `${account.movements
		.reduce((result, mov) => {
			if (mov > 0) {
				result.push(calInterested(mov));
			}
			return result;
		}, [])
		.reduce((acc, int) => acc + int, 0)} €`;
};

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

// event handler
let currentAccount;
// fake always login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = '100';

const now = new Date();

function formatDate(date) {
	const day = `${date.getDate()}`.padStart(2, '0');
	const month = `${date.getMonth()}`.padStart(2, '0');
	const fullYear = date.getFullYear();
	// const hours = date.getHours();
	// const minutes = `${date.getMinutes()}`.padStart(2, '0');
	// return `${day}/${month}/${fullYear}, ${hours}:${minutes}`;
	return `${day}/${month}/${fullYear}`;
}

labelDate.textContent = formatDate(now);

function updateUI(account) {
	// display movement
	displayMovements(account);

	// display balance
	calcDisplayBalance(account);

	// display salary
	calcDisplaySummary(account);
}

btnLogin.addEventListener('click', function (e) {
	// prevent from submitting
	e.preventDefault();

	currentAccount = accounts.find(
		acc => acc.username === inputLoginUsername.value
	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// display ui and welcome message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(' ')[0]
		}`;
		containerApp.style.opacity = '100';

		// clear input
		inputLoginUsername.value = inputLoginPin.value = '';

		// update ui
		updateUI(currentAccount);
	}
});

btnTransfer.addEventListener('click', function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAccount = accounts.find(
		acc => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = '';

	if (
		amount > 0 &&
		receiverAccount &&
		currentAccount.balance >= amount &&
		receiverAccount?.username !== currentAccount.username
	) {
		currentAccount.movements.push(-amount);
		receiverAccount.movements.push(amount);

		// add transfer date
		currentAccount.movementsDates.push(new Date().toISOString());
		receiverAccount.movementsDates.push(new Date().toISOString());

		// update ui
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener('click', function (e) {
	e.preventDefault();

	const amount = Math.floor(inputLoanAmount.value);
	if (
		amount > 0 &&
		currentAccount.movements.some(mov => mov >= amount * 0.1)
	) {
		// add movement
		currentAccount.movements.push(amount);

		// update ui
		updateUI(currentAccount);
	}
	inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			acc => acc.username === currentAccount.username
		);

		accounts.splice(index, 1);
		containerApp.style.opacity = '0';
	}

	inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
	e.preventDefault();
	displayMovements(currentAccount, !sorted);
	sorted = !sorted;
});

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
