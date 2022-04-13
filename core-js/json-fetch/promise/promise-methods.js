/* Promise methods
 * Tao promise khi da biet san ket qua : thanh cong, that bai
 * 1: Promise.all
 * 2: Promise.reject
 * 3: Promise.all -> chay 2 luong du lieu song song ko lien quan, lay ra 1 luc
 * */

let data = { name: 'data', number: 1 };

// resolve - reject
let promiseResolve = Promise.resolve(data);
let promiseReject = Promise.reject('error!');
promiseResolve.then(data => console.log(data));
promiseReject
	.then(data => console.log(data))
	.catch(error => console.log(error));

console.log('\n');

// all -> 1 reject fail all
let promiseOne = new Promise(resolve =>
	setTimeout(() => resolve([1, 2, 3]), 1000)
);

let promiseTwo = new Promise(resolve =>
	setTimeout(() => resolve([4, 5, 6]), 2000)
);

Promise.all([promiseOne, promiseTwo])
	.then(result => {
		console.log(result);
		return result;
	})
	.then(result => result.flat())
	.then(result => {
		console.log(result);
		let mapResult = result.map(number => number * 2);
		console.log(mapResult);
	});
