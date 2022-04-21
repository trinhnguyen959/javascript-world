/** 1. all
 * return boolean
 * check tat ca cac phan tu trong mang co thoa man predicate
 */
console.log('\n1. all');
const all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([1, 2, 3, 4, 5, 6], el => el >= 1));
console.log(all([1, 2, 3, 4, 5, 6], el => el % 2 === 0));

/** 2. allEqual
 * return boolean
 * check tat ca cac phan tu trong arr co bang nhau hay khong
 */
console.log('\n2. allEqual');
const allEqual = arr => arr.every(el => el === arr[0]);
console.log(allEqual([1, 1, 1, 1, 1, 1]));
console.log(allEqual([1, 2, 3, 4, 5, 6]));

/* 3. arrayToCSV */
console.log('\n3. arrayToCSV');
const arrayToCSV = (arr, delimiter = ',') =>
	arr.map(el => el.map(ce => `"${ce}"`).join(delimiter)).join('\n');
console.log(
	arrayToCSV(
		[
			['a', 'b'],
			['c', 'd'],
		],
		';'
	)
);

/** 4. takeNthEl
 * return array
 * take nth element of a array
 */
console.log('\n4. takeNthEl');
const takeNthEl = (arr, num) => arr.filter((el, i) => i % num === num - 1);
console.log(takeNthEl([1, 2, 3, 4, 5, 6], 2));
