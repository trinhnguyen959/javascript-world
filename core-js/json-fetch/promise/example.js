// example
let users = [
	{ id: 1, name: 'Mr Smith' },
	{ id: 2, name: 'Ms Smith' },
	{ id: 3, name: 'Dr Strange' },
];

let comments = [
	{ id: 1, user: 1, content: 'Put your gun down!' },
	{ id: 2, user: 2, content: 'Wait for a sec!' },
	{ id: 3, user: 1, content: 'This is a real world' },
];

// fake api
let getComments = () =>
	new Promise(resolve => setTimeout(() => resolve(comments), 1000));

// get users
let getUserListByIds = userIds =>
	new Promise(resolve =>
		setTimeout(
			() => resolve(users.filter(user => userIds.includes(user.id))),
			1000
		)
	);

// promise comment
getComments()
	.then(comments => {
		return comments.map(comment => comment.user);
	})
	.then(response => {
		console.log(response);
		// return users
		return getUserListByIds(response).then(users => {
			return {
				users,
				comments,
			};
		});
	})
	.then(data => {
		let commentsBlock = document.getElementById('comments-block');
		let html = '';
		data.comments.forEach(comment => {
			let user = data.users.find(user => user.id === comment.user);
			html += `<li>${user.name}: ${comment.content}</li>`;
		});
		commentsBlock.innerHTML = html;
	})
	.finally(() => console.log('done!'));
