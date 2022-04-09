/*
* call back
* la ham co kha nang truyen qua doi so khi goi ham khacs
* la ham
* duoc truyen qua doi so
* */

function myFunction(param) {
	console.log(typeof param);
	if (typeof param === 'function') {
		param('This is the world');
	}
}

function myCallback(value) {
	console.log('Value:', value);
}

myFunction(myCallback);

console.log('\n==> reduce');
Array.prototype.reduce2 = function (callback, result) {
	let i = 0;
	if (arguments.length < 2) {
		i = 1;
		result = this[0];
	}
	for (; i < this.length; i++) {
		result = callback(result, this[i], i, this);
	}
	return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let totalNumbers = numbers.reduce2((total, number) => total + number, 0);
console.log(totalNumbers);

console.log('\n==> map');
Array.prototype.map2 = function (callback) {
	let output = [];
	let arrayLength = this.length;

	for (let i = 0; i < arrayLength; i++) {
		let result = callback(this[i], i);
		output.push(result);
	}
	return output;
};

let courses = ['Javascript', 'PHP', 'Ruby'];

let html = courses.map2(course => `<h2>${course}</h2>`);
console.log('html result:', html.join(''));

// forEach
console.log('\n==> forEach');
Array.prototype.forEach2 = function (callback) {
	for (const index in this) {
		if (this.hasOwnProperty(index)) {
			callback(this[index], index, this);
		}
	}
};

courses.forEach2(course => console.log(course));

console.log('\n==> find');
Array.prototype.find2 = function (callback) {
	for (const index in this) {
		if (this.hasOwnProperty(index)) {
			if (callback(this[index], index, this)) {
				return this[index];
			}
		}
	}
};

let findCourseName = courses.find2(course => course === 'PHP');
console.log(findCourseName);

let courseArr = [
	{
		id: 1,
		name: 'Javascript',
		coin: 250
	},
	{
		id: 2,
		name: 'HTML, CSS',
		coin: 0
	},
	{
		id: 3,
		name: 'Ruby',
		coin: 0
	},
	{
		id: 4,
		name: 'PHP',
		coin: 400
	},
	{
		id: 5,
		name: 'ReactJS',
		coin: 500
	},
	{
		id: 6,
		name: 'Ruby',
		coin: 100
	},
];

console.log('\n==> filter');
Array.prototype.filter2 = function (callback) {
	let result = [];
	for (const index in this) {
		if (this.hasOwnProperty(index)) {
			if (callback(this[index], index, this)) {
				result.push(this[index]);
			}
		}
	}
	return result;
};

let courseHasCoinGreaterThan100 = courseArr.filter2(course => course.coin > 100);
console.log(courseHasCoinGreaterThan100);

console.log('\n==> some');
Array.prototype.some2 = function (callback) {
	for (const index in this) {
		if (this.hasOwnProperty(index)) {
			if (callback(this[index], index, this)) {
				return true;
			}
		}
	}
};

console.log(courseArr.some2(course => course.coin > 100));

console.log('\n==> every');
Array.prototype.every2 = function (callback) {
	for (const index in this) {
		if (this.hasOwnProperty(index)) {
			if (!callback(this[index], index, this)) {
				return false;
			}
		}
	}
	return true;
};

console.log(courseArr.every2(course => course.coin > 1));