/* spread la duong -> rest la am
 * 1: array
 * 2: object
 * */

// 1. array
let firstArray = ['javascript', 'ruby', 'php'];
let secondArray = ['reactjs', 'dart'];

let spreadArray = [...firstArray, ...secondArray];
console.log('spread array:', spreadArray);

// 2. object
const firstObj = {
	name: 'javascript',
	tag: 'course',
};

const secondObj = {
	description: 'best programming language',
	rate: 5,
	tag: '#course#javascript',
};

const combineObj = { ...firstObj, ...secondObj };
console.log('spread object: ', combineObj);

// 3. spread voi fn -> truyen vao khi goi la spread
function logger(first, second, third) {
	console.log(first, second, third);
}

logger(...spreadArray);
