// classes and constructor function

// constructor function
// function Course(name, price) {
// 	this.name = name;
// 	this.price = price;
//
// 	this.getName = function () {
// 		return this.name;
// 	};
// }

// class
class Course {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	getName() {
		return this.name;
	}

	run() {
		console.log('this method in class');
	}
}

const jsCourse = new Course('Javascript', 100);
const phpCourse = new Course('PHP', 200);
console.log('js course', jsCourse);
console.log('php course', phpCourse);
jsCourse.run();
