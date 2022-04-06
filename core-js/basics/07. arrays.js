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
console.log('array after unshift:', languages);

// 8: concat -> noi array
let secondLanguages = ['Rails', 'Flutter', 'C#'];
console.log('concat: ', languages.concat(secondLanguages));

console.log('\n');

// 9: cat 1 mang
console.log('slice:', secondLanguages.slice(1));