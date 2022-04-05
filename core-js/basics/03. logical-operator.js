// == so sanh quan tam den gia tri
console.log('number 1 == number 1:', 1 == 1);
console.log('string 1 == number 1:', '1' == 1);
console.log('string 1 != number 1:', '1' != 1);

console.log('\n')

// === so sanh quan tam den gia tri va kieu du lieu
console.log('number 1 === number 1:', 1 === 1);
console.log('string 1 === number 1:', '1' === 1);
console.log('string 1 !== number 1:', '1' !== 1);

console.log('\n')

// toan tu && logic can chu y
let first = 1;
let second = 2;
let result = first > 0 && second > 0;
console.log(result);

/* && => toan tu && luon doc tu trai sang phai
* kiem tra gia tri trai khong la Falsy thi se sang phai
* 1 trong A B C la Falsy thi tra luon ra gia tri do
* */
let wiredResult = 'A' && 'B' && 'C';
let secondWiredResult = 'A' && NaN && 'C'
console.log(wiredResult); // C

if (secondWiredResult) {
	console.log('True');
} else {
	console.log('False')
}

console.log('\n');

/*|| => luon doc tu trai sang phai
* chi can 1 gia tri la Truthy thi se tra luon la true
* khong quan tam den nhung toan tu phia sau
* */

let secondResult = NaN || 'B' || undefined || 'D';
console.log(secondResult);