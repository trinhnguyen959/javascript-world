/*
 * IIFE - Immediately Invoked Function Expression
 * 1: trong nhu nao
 * 2: dung ; truoc
 * 3: la ham private
 * 4: dung khi nao
 * 5: cach tao ra
 * 6: vi du su dung
 * */

// 1. () -> goi ham
(function () {
	console.log('NOW function');
})();
// arrow fn
(() => console.log('NOW arrow'))();
// param
(message => console.log(message))('this is message!');

// 2. luon dung ; truoc
// let data = 'data'
// ;(() => console.log('data'))()

/* 3. - la private
 * goi duoc chinh no trong no , ben ngoai - ngang cap khong goi duoc
 * */
let i = 0;
(function myFn() {
	i++;
	console.log(i);
	if (i < 10) myFn();
})();

// 4. -> dung ham chay ngay nhung ko tao bien va ham global
(function () {
	let udemy = 'udemy';
	console.log(udemy);
})();
// console.log(udemy); // udemy is not defined

// 5. cach tao kho hieu hon
(function () {
	let udemy = 'udemy second';
	console.log(udemy);
})();
// }()); -> co the de ngoac ben trong

// 6
const app = (function () {
	// private
	const cars = [];

	return {
		get(index) {
			return cars[index];
		},
		add(car) {
			cars.push(car);
		},
		edi(index, car) {
			cars[index] = car;
		},
		delete(index) {
			cars.splice(index, 1);
		},
	};
})();

app.add('Mazda');
