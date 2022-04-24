console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // error
// console.log(addArrow(2, 3)); //error

function addDecl(a, b) {
	return a + b;
}

const addExpr = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;
