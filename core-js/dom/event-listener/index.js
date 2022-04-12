// event listener

let btn = document.getElementById('btn');

function getLog() {
	console.log('click');
}

function getLog2() {
	console.log('click-2');
}

// co the add nhieu event
btn.addEventListener('click', getLog);
btn.addEventListener('click', getLog2);

setTimeout(function () {
	btn.removeEventListener('click', getLog);
}, 3000);
