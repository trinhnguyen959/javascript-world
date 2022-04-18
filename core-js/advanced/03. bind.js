// bind

this.firstName = 'Mr';
this.lastName = 'Smith';

const teacher = {
	firstName: 'Mrs',
	lastName: 'Smith',
	getFullName(first, second) {
		console.log(first, second);
		return `${this.firstName} ${this.lastName}`;
	},
};

// case 1:
// console.log('case 1:', teacher.getFullName()); // Mrs Smith

// case 2:
// const getTeacherName = teacher.getFullName;
// console.log('case 2:', getTeacherName()); // Mr Smith

// case bind:
const doctor = {
	firstName: 'Dr',
	lastName: 'Strength',
};
const getTeacherNameBind = teacher.getFullName.bind(doctor);
console.log('case bind:', getTeacherNameBind());

// case params -> truyen tham so nhu bt
console.log('case params:', getTeacherNameBind('first', 'second'));

// co the truyen o bind -> uu tien cao hon
const getTeacherNameBind2 = teacher.getFullName.bind(doctor, 'third', 'four');
console.log('case bind2:', getTeacherNameBind2('first', 'second'));

// example
const domEl = {
	firstName: 'Dr',
	lastName: 'Esavador',
	getFullName() {
		console.log(`${this.firstName} ${this.lastName}`);
	},
};

let button = document.querySelector('button');
button.onclick = domEl.getFullName.bind(domEl);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
console.log($('#heading'));

// hard example
const app = (() => {
	const cars = ['BMW'];
	let root = $('#root');
	let input = $('#input');
	let submit = $('#submit');

	return {
		add(car) {
			cars.push(car);
		},
		delete(index) {
			cars.splice(index, 1);
		},
		render() {
			root.innerHTML = cars
				.map(
					(car, index) =>
						`<li>${car}<span class="delete" data-index="${index}">&times</span></li>`
				)
				.join('');
		},
		handleDelete(e) {
			console.log(e.target);
			let deleteBtn = e.target.closest('.delete');
			if (deleteBtn) {
				let index = deleteBtn.dataset.index;
				this.delete(index);
				this.render();
			}
		},
		init() {
			// handle dom event
			submit.onclick = () => {
				const car = input.value;
				this.add(car);
				this.render();
				input.value = '';
				input.focus();
			};
			root.onclick = this.handleDelete.bind(this);
			this.render();
		},
	};
})();

app.init();
