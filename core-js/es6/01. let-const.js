/*
 * 1: var / let & const: scope, hoisting
 * */

// scope: if else, loop, {}...
{
	var course = 'javascript basic';
	let name = 'John Smith';
}

console.log(course); // javascript basic
// console.log(name);  // name is not defined

// var -> hoisting, let/const -> not
hoistingName = 'hoisting name';
var hoistingName;
console.log(hoistingName);

// letName = 'const name'; //-> error
// let letName;
// console.log(letName); // Cannot access 'letName' before initialization

// constName = 'const name';
// const constName;
// console.log(constName); // Missing initializer in const declaration

/* 2: const / var & let: assignment
 * let va var thi gan lai duoc -> trong truong hop la bien
 * const -> thi khong
 * !!! voi object thi khai bao voi const thi thay doi value cua field dc
 * */

const courseObj = { name: 'Javascript' };
// courseObj = { description: 'online course' };
courseObj.description = 'online course'; // ok
courseObj.name = 'Java'; // ok
console.log('course:', courseObj);
