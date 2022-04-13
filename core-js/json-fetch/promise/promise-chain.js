/* promise chain
 * then -> return 1 promise
 * */

let promiseChain = new Promise(resolve => resolve({ name: 'data', number: 0 }));

promiseChain
	.then(originData => {
		console.log(originData);
		if (originData['number'] === 0) {
			return { name: 'data', number: 1 };
		}
	})
	.then(previousThenData => {
		console.log(previousThenData);
		if (previousThenData['number'] === 1) {
			return { name: 'data', number: 2 };
		}
	})
	.then(previousThenData => {
		console.log(previousThenData);
		if (previousThenData['number'] === 2) {
			return { name: 'data', number: 3 };
		}
	})
	.then(previousThenData => {
		console.log(previousThenData);
		return new Promise(resolve => {
			setTimeout(() => resolve({ name: 'data', number: 10 }), 3000);
		});
	})
	.then(previousThenData => {
		console.log(previousThenData);
		if (previousThenData['number'] === 3) {
			return { name: 'data', number: 4 };
		}
	})
	.catch(() => console.error('error'))
	.finally(() => console.log('done!'));

// Ex: moi 1s sinh dem 1 so
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

sleep(1000)
	.then(() => {
		console.log(1);
		return sleep(1000);
	})
	.then(() => {
		console.log(2);
		return sleep(1000);
	})
	.then(() => {
		console.log(3);
		return sleep(1000);
	})
	.then(() => {
		console.log(4);
		return sleep(1000);
	})
	.then(() => {
		console.log(5);
		return sleep(1000);
	})
	.finally(() => console.log('done!'));
