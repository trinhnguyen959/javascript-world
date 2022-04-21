/** 1. countNAppear
 * return number
 * count time appear a char in string
 */
console.log('\n1. countNAppear');
const countNAppear = (arr, str) =>
	Array.from(arr).filter(el => el === str).length;
console.log(countNAppear('this is second time', 'i'));
