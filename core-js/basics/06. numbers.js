let result = 20 / 'abc';
console.log('so khong hop le:', result);
// van la so nhung khong hop le
console.log('NaN is:', typeof result);
// so sanh
console.log('NaN is equal NaN', NaN === NaN); // false
console.log(isNaN(result));

console.log('\n');

let age = 18;
let PI = 3.14;
let abovePI = 3.5;
let caseNumber = 303232.3784824892;
let ageToString = age.toString();
console.log('age to String:', typeof ageToString);
// toFix() lam tron len xuong
console.log('PI to fix:', PI.toFixed());
console.log('abovePI to fix:', abovePI.toFixed());
// case thuc te
console.log('case thuc te:', caseNumber.toFixed(3));