// create a date - 4 way
const now = new Date();
console.log(now);

console.log(new Date('December 24. 2022'));
console.log(new Date('2019-11-01T13:15:33.035Z'));
console.log(new Date(-1));

console.log(new Date().getFullYear());
console.log(new Date().toISOString());
console.log(Date.now());

//
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDayPassed = (date1, date2) =>
	Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDayPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);
