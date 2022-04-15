// arrow
const logger = log => console.log(log);

// return object
const obj = (first, second) => ({ first, second });

// this
const course = {
	name: 'javascript',
	getName: function () {
		return this.name;
	},
};

const courseArrow = {
	name: 'javascript',
	getName: () => this.name,
};

console.log('course name:', course.getName());
console.log('course name arrow:', courseArrow.getName()); // undefined
