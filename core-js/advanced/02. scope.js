/*
 * scope
 * 1: cac loai scope
 *   - global
 *   - code block {} -> let, const
 *   - local scope -> var, function
 * */

if (true) {
	var a = 1;
}

console.log(a);
