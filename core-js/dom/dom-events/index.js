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
