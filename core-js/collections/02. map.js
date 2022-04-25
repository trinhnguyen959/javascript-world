// map

const map = new Map();
// set return updated map
map.set('name', 'Classics Italiano');
map.set(1, 'Fiorenze, Italy');
console.log(map.set(2, 'Lisbon, Portugal'));

map.set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23);
