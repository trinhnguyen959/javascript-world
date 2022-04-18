/* apply
 *  tuong tu call nhung nhan doi so la array
 * */

const teacher = {
	firstName: 'Mrs',
	lastName: 'Smith',
	isOnline: false,
	goOnline() {
		this.isOnline = true;
		console.log(`${this.firstName} ${this.lastName} is online`);
	},
	goOffline() {
		this.isOnline = false;
		console.log(`${this.firstName} ${this.lastName} is offline`);
	},
};

const student = {
	firstName: 'Trinh',
	lastName: 'Nguyen',
	isOnline: false,
};

teacher.goOnline.apply(student);

// extend
function Animal(name, weight) {
	this.name = name;
	this.weight = weight;
}

function Parrot(name, weight) {
	Animal.apply(this, arguments);
	this.speak = function () {
		console.log('Have a guest!');
	};
}

let parrot = new Parrot('parrot', 300);
console.log(parrot);
parrot.speak();
