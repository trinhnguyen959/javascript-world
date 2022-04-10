/* cac kieu du lieu false trong js:
 * 0
 * false
 * '' or ""
 * undefined
 * NaN
 * null
 * */

console.log('0 is truthy: ', 0 ? true : false);
console.log('false is truthy: ', false == true);
console.log('empty is truthy: ', '' == true);
console.log('undefined is truthy: ', undefined == true);
console.log('NaN is truthy: ', NaN == true);
console.log('null is truthy: ', null == true);

console.log('\n');

console.log('1 and all others is truthy: ', 1 == true);
