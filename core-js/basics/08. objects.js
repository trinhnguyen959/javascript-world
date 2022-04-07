// object
let primaryEmail = 'primaryEmail';
let secondaryEmail = 'secondaryEmail';
let myInfo = {
	name: 'Kismir',
	age: 18,
	address: 'HaNoi, VN',
	[primaryEmail]: 'primaryEmail@gmail.com',
	[secondaryEmail]: 'secondaryEmail@gmail.com',
	getName: function () {
		return this.name;
	},
};
console.log('myInfo', myInfo);

// 1: them 1 key-value moi -> 2 cach
myInfo.email = 'trinhnguyen959@gmail.com';
myInfo['link'] = 'linkedin.com';

console.log('myInfo after add mail', myInfo);

console.log('\n');

// 2: lay key value ra ngoai -> 2 cach
console.log('get key value 1: ', myInfo.email);
console.log('get key value 2:', myInfo['link']);
console.log('get non existing key 1:', myInfo.one); // undefined
console.log('get non existing key 2:', myInfo['one']); // undefined
let address = 'address';
console.log('get key with object:', myInfo[address]);

console.log('\n');

// 3: xoa key value
delete myInfo.secondaryEmail;
console.log('myInfo after delete key:', myInfo);

console.log('\n');

console.log(myInfo.getName); // in ra code cua function
console.log(myInfo.getName()); // day moi la thuc thi function

console.log('\n');

// 4: Object constructor
function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar; // this khac nhau

	this.getName = function () {
		return `${this.firstName} ${this.lastName}`; // this khac nhau
	};
}

User.prototype.className = 'F0';
User.prototype.getClassName = function () {
	return this.className;
};

let admin = new User('jonny', 'nguyen', 'avatar');
let user = new User('vu', 'nguyen', 'avatar');
admin.title = 'sharing info';
user.comment = 'this is awesome';

console.log('admin:', admin.getName());
console.log('user:', user.getName());

console.log('\n');

// 5: Object prototype
console.log('classNamePrototype:', user.className);
console.log('classNamePrototype method:', user.getClassName());

console.log('\n');

// 6: Date
let dateString = Date();
console.log('date string:', typeof dateString);

let dateObject = new Date();
console.log('date object:', typeof dateObject);
console.log('get full year:', dateObject.getFullYear());
console.log('get month:', dateObject.getMonth() + 1);
console.log('get day:', dateObject.getDate());

console.log('\n');

// 7: Math -> khong phai la object constructor
console.log(Math.PI);
// lam tron
console.log(Math.round(1, 3));

// gia tri tuyet doi
console.log(Math.abs(-2));

// lam tron tren
console.log(Math.ceil(4.2));

// lam tron duoi
console.log(Math.floor(4.2));

// radom -> tra ve so thap phan nho hon 1
console.log(Math.random());
let random = Math.floor(Math.random() * 5);
let bonus = [
	'10 coin',
	'20 coin',
	'30 coin',
	'40 coin',
	'50 coin',
];

console.log(bonus[random]);

// min - max
console.log(Math.min(1, 0, 38, 43, 7, 7, 9,));
console.log(Math.max(1, 0, 38, 43, 7, 7, 9,));