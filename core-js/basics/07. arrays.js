let languages = ['JavaScript', 'Ruby', 'PHP'];

// 1: toString
console.log('toString result:', languages.toString());

console.log('\n');

// 2: join -> join array lai voi nhau
console.log('join result:', languages.join('|'));

console.log('\n');

// 3: pop -> xoa phan tu cuoi mang, tra lai chinh phan tu do
// console.log('pop:', languages.pop());

// 4: push -> them 1 hoac nhieu phan tu vao cuoi mang -> tra ve length cua mang
let number = languages.push('Java', 'TypeScript');
console.log('array after push:', languages);
console.log('length of push:', number);

// 5: shift: xoa phan tu dau tien cua mang, tra lai chinh phan tu do
// console.log('shift:', languages.shift());

// 6: unshift: them 1 hoac nhieu phan tu vao dau mang -> tra ve length cua mang
let unshift = languages.unshift('Angular', 'React');
console.log('length of unshift:', unshift);
console.log('array after unshift:', languages);

// 7: splice: xoa cat chen 1 phan tu moi vao mang
/*
* params1: vi tri con tro
* params2: range can xoa -> 0 la khong xoa
* params3: mang can them
* */
languages.splice(2, 0, 'Dart');
console.log('array after splice:', languages);

// 8: concat -> noi array
let secondLanguages = ['Rails', 'Flutter', 'C#'];
console.log('concat: ', languages.concat(secondLanguages));

console.log('\n');

// 9: cat 1 mang
console.log('slice:', secondLanguages.slice(1));

console.log('\n');

let courses = [
	{
		id: 1,
		name: 'Javascript',
		coin: 250
	},
	{
		id: 2,
		name: 'HTML, CSS',
		coin: 0
	},
	{
		id: 3,
		name: 'Ruby',
		coin: 0
	},
	{
		id: 4,
		name: 'PHP',
		coin: 400
	},
	{
		id: 5,
		name: 'ReactJS',
		coin: 500
	},
	{
		id: 6,
		name: 'Ruby',
		coin: 100
	},
];

// forEach
courses.forEach((course, index) => console.log(index, course));

let isCoinGreaterThan0 = courses.every(course => course.coin > 0);
console.log('isCoinGreaterThan0:', isCoinGreaterThan0);
// some
let isCoinEqualZero = course => course.coin === 0;
console.log(courses.some(isCoinEqualZero));
// find -> tim ra 1 phan tu , khong lay ra 2 phan tu
let rubyCourse = courses.find(course => course.name === 'Ruby');
console.log('ruby course:', rubyCourse);
// filter
let rubyCourses = courses.filter(course => course.name === 'Ruby');
console.log('ruby courses:', rubyCourses);

console.log('\n');

// map
function courseHandler(course, index, originArray) {
	return {
		id: course.id,
		name: `Course: ${course.name}`,
		coin: course.coin,
		coinContext: `Price: ${course.coin}`
	};
}

let newCourses = courses.map(courseHandler);
console.log(newCourses);

console.log('\n');

// reduce
let totalCoin = courses.reduce((total, course, index, original) => total + course.coin, 0);
console.log('totalCoin: ', totalCoin);

// flat array
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flattedArray = depthArray.reduce((flattedArray, item) => flattedArray.concat(item), []);
console.log('flatted Array:', flattedArray);