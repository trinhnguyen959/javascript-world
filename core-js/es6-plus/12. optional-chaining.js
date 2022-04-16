// optional chaining

const animal = {
	name: 'alice',
	cat: {
		name: 'Tom',
		mouse: {
			name: 'Jerry',
			monkey: {
				name: 'luffy',
			},
		},
	},
	getName() {
		return this.name;
	},
};

// print luffy
if (animal?.cat?.mouse?.monkey.name) {
	console.log(animal.cat.mouse.monkey.name);
	console.log(animal?.getName());
}
