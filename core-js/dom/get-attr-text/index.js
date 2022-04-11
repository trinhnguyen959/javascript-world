// DOM Attribute
let headingElement = document.querySelector('h1');
console.log('heading element:', { headingElement });

// setter
headingElement.title = 'heading';
headingElement.id = 'heading';
headingElement.className = 'heading';

// method -> add custom attribute: khong nhat thiet la built-in
headingElement.setAttribute('href', 'link.com');
console.log('get attribute:', headingElement.getAttribute('href'));
console.log('title: ', headingElement.getAttribute('title'));

/* text node
 * innerText: lay ra noi dung nhu tren browser -> thuoc tinh Element Node
 * textContent: lay ra noi dung y nguyen bao gom: space, display:none -> ca
 *  Element Node va Text Node
 * */
// getter
console.log('inner Text:', headingElement.innerText);
console.log('text Content:', headingElement.textContent);

// setter
headingElement.innerText = 'inner Heading';
headingElement.textContent = 'content Heading';
headingElement.innerText = '<i>test text</i>'; // chi hien thi la text
headingElement.innerText = `

get with br

`; // no se hieu la <br>
headingElement.textContent = `

get with br

`; // van la space
