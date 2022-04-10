// 1: performance
let languages = ['Javascript', 'PHP', 'Dart', 'Java', 'Ruby', 'Python'];

// bad performance
// for (let i = 0; i < languages.length; i++) {
// 	console.log(languages[i]);
// }

// good for performance
let languagesLength = languages.length;
for (let i = 0; i < languagesLength; i++) {
	console.log(languages[i]);
}

// 2: for/in -> get key object
let myInfo = {
	name: 'Trinh Nguyen',
	age: 18,
	address: 'Namek',
};

for (const key in myInfo) {
	console.log('key:', key);
	console.log('value:', myInfo[key]);
}

console.log('\n');

// key array is number
for (const key in languages) {
	console.log('key:', key);
	console.log('value:', languages[key]);
}

// in string -> key is number
let myString = 'This is some strings';
for (const key in myString) {
	console.log('key:', key);
	console.log('value:', myString[key]);
}

// for/of -> lay ra value
for (const language of languages) {
	console.log('value:', language);
}

// object thi khong lap theo cach bt
// for (const myInfoElement of myInfo) {
// 	console.log('element', myInfoElement);
// }
for (const key of Object.keys(myInfo)) {
	console.log('key:', key);
}

for (const value of Object.values(myInfo)) {
	console.log('value:', value);
}
