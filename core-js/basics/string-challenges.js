// 1. lay moi nth phan tu trong array
let numbersNth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

const takeNth = (array, number) => {
	return array.filter((el, i) => i % number === number - 1);
};
console.log('\ntake nth el:', takeNth(numbersNth, 2));

// 2. times b occur in a
let sacrificed = 'this is the second time when the things go wrong';
const timeOccur = (array, str) => {
	// return array.split(str).length - 1;
	return Array.from(array).filter(el => el === str).length;
};
console.log('\ni occur in sacrificed:', timeOccur(sacrificed, 'i'));
