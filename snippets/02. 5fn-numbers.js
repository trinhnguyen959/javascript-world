/** 1. approximatelyEqual
 * return boolean
 * check 2 so co xap xi bang nhau hay khong
 */
console.log('\n1. approximatelyEqual');
const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
	Math.abs(v1 - v2) < epsilon;
console.log(approximatelyEqual(Math.PI / 2.0, 1, 5709));

/* 2. average*/
console.log('\n2. average');
const average = (...numbers) =>
	numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
console.log(average(0, 1, 2, 3, 4, 5, 6));
