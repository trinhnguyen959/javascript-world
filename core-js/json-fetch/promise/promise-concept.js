/* promise
 * param: fn executor
 * executor tra ve 2 fn: resolve,reject
 * cac trang thai:
 * 1: Pending
 * 2: Fulfil
 * 3: Rejected
 * */
let promise = new Promise((resolve, reject) => {
	// succeed
	resolve({ name: 'data', number: 1 });

	// failed
	reject(404);
});

// then catch finally -> deu nhan 1 fn callback
promise
	.then(data => {
		console.log('succeed!', data);
	})
	.catch(error => {
		console.log('failed!', error);
	})
	.finally(() => {
		console.log('done!');
	});
