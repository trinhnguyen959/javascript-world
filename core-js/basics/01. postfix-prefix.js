/*post fix*/
let postfixNumber = 6;
// 1: + 1 cho number sau number + 1 =7
// 2: tra ve number sau khi duoc + 1
let postOutput = ++postfixNumber;
console.log('Postfix output:', postOutput);

/*prefix*/
let prefixNumber = 6;
// 1: number copy ra 1 bien preOutput -> in ra se la 6
// 2: + 1 cho number number = number + 1 = 7
// 3: tra ve a copy la 6
let preOutput = prefixNumber++;
console.log('Prefix output:', preOutput);
console.log('Prefix number:', prefixNumber);

console.log('\n')

// sample 1
let firstNumber = 6;
let firstOutput = firstNumber++ + --firstNumber;
// 1: copy first number sang sampleOutput = 6
// 2: khi sang -- thi number da tang len 1 = 7, --7 = 6
console.log('First Output:', firstOutput);

console.log('\n')

// sample 2
let secondNumber = 6;
let sencondOutput = ++secondNumber * 2 - secondNumber-- * 2;
// 1: cong thang 1 cho second number = 7
// 2: number da la 7 copy number van la 7 -> 7 * 2 - 7 * 2
console.log('Sencond Output:', sencondOutput);