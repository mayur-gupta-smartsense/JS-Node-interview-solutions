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

console.log(false ?? 17) // fasle
console.log(null ?? 18)  // 18
console.log(undefined ?? 19) // 19

// The ?? operator is similiar to || operator

/*
  The || operator:

Returns the right side if the left side is any falsy value
Falsy values: false, 0, '', null, undefined, NaN

The ?? operator:

Returns the right side only if the left side is null or undefined





**/

// I am just testing Git from  this useless commit
// I am just again testing this Git from my local machine.


