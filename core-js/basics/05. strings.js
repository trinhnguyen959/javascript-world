// template string
let firstName = 'Trinh';
let lastName = 'Nguyen';
// this is template string
let fullName = `My name is ${firstName} ${lastName}`;
console.log(fullName);

console.log('\n');

// string method
let myString = 'This is the string in my js space js and the space';
// 1: length
console.log('length:', myString.length);

console.log('\n');

// 2: find index: indexOf -> tra ve vi tri dau tien, con lai tinh
console.log('index of js:', myString.indexOf('js'));
console.log('index of ABC:', myString.indexOf('ABC'));
// tham so thu 2
console.log('index second of i:', myString.indexOf('i', 10));
console.log('last index of i:', myString.lastIndexOf('i'));
// search
console.log('search js:', myString.search('js'));

console.log('\n');

// 3: cut string
console.log('slice:', myString.slice(4));
console.log('reverse slice:', myString.slice(-6));

console.log('\n');

// 4: replace -> dung thay the duoc tu dau tien tim thay
console.log('replace: ', myString.replace('js', 'JS'));
// thay the ca thi dung regular expression
console.log('replace using regex:', myString.replace(/js/g, 'JS'));
console.log('replace using replaceAll:', myString.replaceAll('js', 'JS'));

console.log('\n');

// 5: upperCase - lowerCase
console.log('upper case:', myString.toUpperCase());
console.log('lower case:', myString.toLowerCase());

console.log('\n');

// 6: trim -> loai bo space o 2 dau
let lotOfSpace = '                this is a lot of space             ';
console.log('length before:', lotOfSpace.length);
let spaceAfter = lotOfSpace.trim();
console.log('trim space:', spaceAfter);
console.log('length after:', spaceAfter.length);

console.log('\n');

// 7: split - cat 1 string thanh array qua 1 diem chung
let languages = 'JavaScript, PHP, Ruby';
let languagesArr = languages.split(', ');
console.log('language arrays:', languagesArr);

console.log('\n');

// 8: charAt -> get character by index
console.log('char at 10 is:', myString.charAt(10));
// cach don gian hon
console.log('string la array:', myString[10]);
// khong tim thay -> tra ve rong
console.log('khong ton tai index:', typeof myString.charAt(1000));

// 9: padStart and padEnd
const message = 'go to the pro';
console.log(message.padStart(20, '.'));
console.log('Trinh'.padEnd(20, '.'));
