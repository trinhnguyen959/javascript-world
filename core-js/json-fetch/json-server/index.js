// json server
let coursesApi = 'http://localhost:3000/courses';

// start
let start = () => {
	getCourses(courses => {
		renderCourse(courses);

		handleCreateForm();
	});
};

start();

// functions
function getCourses(callback) {
	fetch(coursesApi)
		.then(res => res.json())
		.then(callback);
}

function renderCourse(courses) {
	let listCourse = document.querySelector('#courses');
	let htmlMap = courses.map(
		course => `<li class="item-${course.id}">
				<h4>${course.name}</h4>
				<p>${course.description}</p>
				<button onclick="handleDeleteCourse(${course.id})">Delete</button>
			</li>`
	);
	listCourse.innerHTML = htmlMap.join('');
}

function createCourse(data, callback) {
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	fetch(coursesApi, options)
		.then(res => res.json())
		.then(callback);
}

function handleDeleteCourse(courseId) {
	let options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	fetch(`${coursesApi}/${courseId}`, options)
		.then(res => res.json())
		.then(() => {
			let courseDeleted = document.querySelector(`.item-${courseId}`);
			if (courseDeleted) {
				courseDeleted.remove();
			}
		});
}

function handleCreateForm() {
	let createBtn = document.querySelector('#createBtn');
	createBtn.onclick = () => {
		let name = document.querySelector('input[name="name"]').value;
		let description = document.querySelector(
			'input[name="description"]'
		).value;

		createCourse({ name, description }, () => getCourses(renderCourse));
	};
}
