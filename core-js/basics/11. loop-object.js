// Object.keys() and values()

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const weekEntries = Object.entries(weekDays);
console.log(weekEntries);

const openingHours = {
	[weekDays[3]]: {
		open: 12,
		close: 22,
	},
	[weekDays[4]]: {
		open: 11,
		close: 23,
	},
	[weekDays[5]]: {
		open: 0,
		close: 24,
	},
};

// name
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
	openStr += `${day}, `;
}
console.log(openStr);

// value
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}
