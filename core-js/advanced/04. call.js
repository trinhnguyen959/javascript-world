/* call
 * la bind va goi luon ham
 **/
function random() {
	console.log(Math.random());
}

// random() binh thuong js engine se goi call
random.call();

// sample
const teacher = {
	firstName: 'Mrs',
	lastName: 'Smith',
};

const student = {
	firstName: 'Trinh',
	lastName: 'Nguyen',
	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};

// function borrowing
student.getFullName.call(teacher);

function Animal(name, weight) {
	this.name = name;
	this.weight = weight;
}

function Chicken(name, weight, legs) {
	Animal.call(this, name, weight);
	this.legs = legs;
}

let chicken = new Chicken('Kentucky', 10, 2);
console.log(chicken);

// forEach
function logger() {
	Array.prototype.forEach.call(arguments, item => console.log(item));
}

// sum
function sum() {
	let reduceCall = Array.prototype.reduce.call(arguments, (a, b) => a + b);
	console.log('reduce call:', reduceCall);
}

// slice
function convertToArr() {
	console.log('arr:', Array.prototype.slice.call(arguments));
}

logger(1, 2, 3, 4, 5);
sum(1, 2, 3, 4, 5, 6, 7, 8);
convertToArr(1, 2, 3, 4, 5, 6, 7, 8, 9);
