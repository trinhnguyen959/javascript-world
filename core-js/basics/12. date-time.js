// create a date - 4 way
const now = new Date();
console.log(now);

console.log(new Date('December 24. 2022'));
console.log(new Date('2019-11-01T13:15:33.035Z'));
console.log(new Date(-1));

console.log(new Date().getFullYear());
console.log(new Date().toISOString());
console.log(Date.now());
