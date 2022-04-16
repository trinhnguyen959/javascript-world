/*
 * enhanced object literals
 * 1: dinh nghia key: value cho object
 * 2: dinh nghia method cho object
 * 3: dinh nghia key cho object duoi dang bien
 * */

// 1
let name = 'javascript';
let price = 1000;

const course = {
	name,
	price,

	// 2
	getName() {
		return name;
	},
};
console.log('course:', course);
console.log('get name:', course.getName());

// 3
let fieldName = 'name';
let fieldPrice = 'price';

const secondCourse = {
	[fieldName]: 'javascript',
	[fieldPrice]: 1000,
};

console.log('second course', secondCourse);
