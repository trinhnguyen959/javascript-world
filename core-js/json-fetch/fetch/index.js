// fetch data
let placeHolderApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(placeHolderApi)
	.then(response => response.json())
	.then(data => console.log(data));
