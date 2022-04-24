'use strict';

function calcAge(birthYear) {
	const age = 2037 - birthYear;
	console.log(firstName);

	function printAge() {
		const output = `You are ${age} born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millennial = true;
			const firstName = 'Liv Taylor';
			const str = `Oh, and you're a millennial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}

		// console.log(add(2, 3)); // not defined in strict mode
		console.log(millennial);
	}

	printAge();
	return age;
}

const firstName = 'Trinh';
calcAge(1991);
