let result = 20 / 'abc';
console.log('so khong hop le:', result);
// van la so nhung khong hop le
console.log('NaN is:', typeof result);
// so sanh
console.log('NaN is equal NaN', NaN === NaN); // false
console.log(isNaN(result));

console.log('\n');

let age = 18;
let PI = 3.14;
let abovePI = 3.5;
let caseNumber = 303232.3784824892;
let ageToString = age.toString();
console.log('age to String:', typeof ageToString);
// toFix() lam tron len xuong
console.log('PI to fix:', PI.toFixed());
console.log('abovePI to fix:', abovePI.toFixed());
// case thuc te
console.log('case thuc te:', caseNumber.toFixed(3));

// ban chat number deu la floating point
console.log('23.0 === 23:', 23.0 === 23);

// convert string to number
console.log(+'23');
console.log(Number('23'));
console.log(~~'23');

// parsing
console.log(Number.parseInt('23px'));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// best way checking value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

// Math
console.log(Math.sqrt(2)); // can bac 2
console.log(8 ** 1 / 2);
// max
console.log(Math.max(1, 11, 22, '34', 11, 33)); // 34
console.log(Math.max(1, 11, 22, '34px', 11, 33)); // NaN

// random number in 1 -> 6
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
	Math.trunc(Math.random() * (max - min) + 1 + min);

console.log(randomInt(10, 20));

const number = 3884764.23;
const options = {
	style: 'currency',
	unit: 'mile-per-hour',
	currency: 'VND',
	// useGrouping: false,
};
console.log('US:', new Intl.NumberFormat('vi-VN', options).format(number));
