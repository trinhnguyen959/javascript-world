/* DOM Events
 * 1: Attribute events
 * 2: Assign event using element node
 * */

// Assign event using element node - get first element
let h1Element = document.querySelector('h1');
// e.target chinh la phan tu ma event tro vao
h1Element.onclick = e => console.log(Math.random(), e.target);

// get all element
let h1AllElement = document.querySelectorAll('h1');
for (const element of h1AllElement) {
	element.onclick = e => console.log(e.target);
}

/*
 * 1: Input / select
 * 2: Keyup / down
 * */
// input
let inputElement = document.querySelector('input[type="text"]');
console.log('input element:', inputElement);
inputElement.onchange = e => console.log(e.target.value);

//checkbox
let checkBoxElement = document.querySelector('input[type="checkbox"]');
checkBoxElement.onchange = e => console.log(e.target.checked);

// selection
let selectElement = document.querySelector('select');
selectElement.onchange = e => console.log(e.target.value);

let keyElement = document.querySelector('input[type="text"]');
keyElement.onkeydown = e => console.log(e);

// key down in document
document.onkeydown = e => {
	console.log(e);
	switch (e.which) {
		case 27:
			console.log('EXIT');
			break;
		case 13:
			console.log('SEND CHAT');
			break;
	}
};

/*
 * 1: preventDefault
 * 2: stopPropagation
 * */

let allLinkElement = document.links;
console.log(allLinkElement);
for (const element of allLinkElement) {
	element.onclick = e => {
		if (!e.target.href.startsWith('https://www.udemy.com')) {
			e.preventDefault();
		}
	};
}

document.querySelector('#dev').onclick = () => console.log('DEV');
document.querySelector('#btn').onclick = e => {
	e.stopPropagation();
	console.log('Click me!');
};
