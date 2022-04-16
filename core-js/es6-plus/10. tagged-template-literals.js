// tagged template literals

// function highlight(...rest) {
// 	console.log(rest);
/*	[
		[ 'Learning programming language ', ' at ', '' ],
		'javascript',
		'udemy'
	]*/
// }

let udemy = 'udemy';
let course = 'javascript';

function highlight([first, ...strings], ...values) {
	console.log('first', first);
	console.log('strings', strings);
	console.log('rest', values);

	return values
		.reduce(
			(acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
			[first]
		)
		.join('');
}

console.log(highlight`Learning programming language ${course} at ${udemy}!`);
