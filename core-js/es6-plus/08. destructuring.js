/*
 * destructuring and rest
 * 1: array
 * 2: object
 * */

// 1. destructuring array
let courses = ['Javascript', 'PHP', 'Ruby'];
const [first, second, third] = courses;
console.log(
	'destructuring array:',
	`first el: ${first},`,
	`second el: ${second},`,
	`third el: ${third}`
);

// 2. rest array
const [fi, ...rest] = courses;
console.log('\n rest array:', `first el: ${fi},`, `rest: ${rest}`);

// 3. destructuring object
const courseTag = {
	name: 'javascript',
	priceTag: 1000,
	image: 'address',
	child: {
		name: 'reactJS',
	},
};

const {
	name,
	priceTag,
	child: { name: childName },
} = courseTag;
console.log(
	'\n destructuring object:',
	`name: ${name},`,
	`priceTag: ${priceTag},`,
	`childName: ${childName}`
);

// 4. rest object -> su dung voi destructuring
const {
	name: restName,
	description = 'default description',
	...restObject
} = courseTag;
console.log('first el:', restName);
console.log(description); // ko co la undefined
console.log('rest object using in destructuring:', restObject);

// 5. rest parameters -> su dung params : con lai la spread
function logger(first, second, ...params) {
	console.log(params);
}

logger(1, 2, 3, 4, 5);

// 6. destructuring voi fn
function desLogger({ name, price, ...rest }) {
	console.log('name:', name);
	console.log('price:', price);
	console.log('rest:', rest);
}

desLogger({
	name: 'js',
	price: 1000,
	tag: 'course',
	description: 'description',
});
