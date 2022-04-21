/* arrayToHtmlList */
const arrayToHtmlList = (arr, listId) =>
	(el => (
		(el = document.querySelector('#' + listId)),
		(el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
	))();

arrayToHtmlList(['item 1', 'item 2'], 'myListID');

/*attempt -> execute fn return result or error*/
const attempt = (fn, ...args) => {
	try {
		return fn(...args);
	} catch (e) {
		return e instanceof Error ? e : new Error(e);
	}
};
var elements = attempt(function (selector) {
	return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
