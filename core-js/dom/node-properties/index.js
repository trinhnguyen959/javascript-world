// Node properties

// 1: DOM CSS -> element node
let boxElement = document.querySelector('.box');
console.log('box Element:', boxElement.style);
// set normal
boxElement.style.width = '200px';
boxElement.style.backgroundColor = 'red';

// Object assign
Object.assign(boxElement.style, {
	height: '100px',
	width: '200px',
	backgroundColor: 'green',
});

// getter
console.log('backgroundColor:', boxElement.style.backgroundColor);

/* 2: classList -> element node
 * add: them
 * contains: kiem tra ton tai
 * remove: xoa
 * toggle: xoa(da co) va them(chua co)
 * */

console.log('classList:', boxElement.classList);
console.log('classList length:', boxElement.classList.length); // do dai
console.log('classList values:', boxElement.classList.value); // tra ve string
boxElement.classList.add('white', 'blue'); // add
console.log('is contain blue:', boxElement.classList.contains('blue')); // contains
boxElement.classList.remove('blue'); // remove
console.log('is contain blue:', boxElement.classList.contains('blue'));
setTimeout(() => {
	boxElement.classList.toggle('blue');
}, 2000);
