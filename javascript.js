/**
 * #Re-Declare1
 * Same question asked twice in 2 different interviews:
 * what will be the output, try changing 2 'var's into 'let'
 * and now first var into let and vice-versa, how and why are the results changing ?
 *
 */
var a = 10;
function sample() {
	console.log("a1", a);
	var a = 20;
}
sample();
console.log("a2", a);
//Ans→ a1, undefined \n a2, 10
