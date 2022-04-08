/*
* call back
* la ham co kha nang truyen qua doi so khi goi ham khacs
* la ham
* duoc truyen qua doi so
* */

function myFunction(param) {
	console.log(typeof param);
	if (typeof param === 'function') {
		param('This is the world');
	}
}

function myCallback(value) {
	console.log('Value:', value);
}

myFunction(myCallback);