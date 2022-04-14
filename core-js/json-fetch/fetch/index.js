// fetch data
let placeHolderApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(placeHolderApi)
	.then(response => response.json())
	.then(data => {
		document.getElementById('comments-block').block.innerHTML = data
			.map(
				post => `<li>
							<h2>${post.title}</h2>
							<p>${post.body}</p>
						</li>`
			)
			.join('');
	})
	.catch(err => console.log(err));
