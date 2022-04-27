/**
 * first class function -> just a concept
 * function coi nhu la value -> store nhu bien hoac properties
 * la 1 "type" cua object
 *
 * high-order function
 * function duoc pass nhu argument cua function khac
 * function return 1 function
 * -> high order co la do first class function
 */

// function chap nhan 1 function la parameter -> callback

const oneWord = str => str.replace(/ /g, '').toLowerCase();

const upperFistWord = str => {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transform = (str, fn) => {
	console.log(`original string: ${str}`);
	console.log(`transformed string: ${fn(str)}`);
	console.log(`transformed by: ${fn.name}\n`);
};

transform('Javascript is the best', upperFistWord);
transform('Javascript is the best', oneWord);

// use callback all the time
const tick = () => console.log('✔');
[1, 2, 3, 4, 5].forEach(tick);

// function return function
const greetEx = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greetArrow('Hey');
greetHey('Jonas');
greetHey('Trinh');

greetArrow('Hello')('JavaScript');
