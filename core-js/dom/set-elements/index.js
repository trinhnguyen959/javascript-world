/* set elements
 * innerHTML
 * outerHTML
 * */

// innerHTML : thay the noi dung ben trong node goi
let boxElement = document.querySelector('.box');
// setter element and text
boxElement.innerHTML = '<h1>Heading</h1>';
console.log('innerHTML:', document.querySelector('h1').innerText);

// setter text
boxElement.innerHTML = 'text heading';

// getter
console.log('innerHTML:', boxElement.innerHTML);

// outerHTML : thay ca noi dung node goi va ben trong
console.log('outerHTML:', boxElement.outerHTML);
boxElement.outerHTML = '<span>outerHTML</span>';