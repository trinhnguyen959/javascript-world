'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'this is guesting';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);
