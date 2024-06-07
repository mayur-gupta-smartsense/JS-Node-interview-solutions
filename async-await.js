//
/**
 * #Queues1
 *What is the output of the program and explain it using queueus.
 * Something to do with Node js queues.
 *
 */

async function check() {
	await Promise.resolve(console.log(1));
	console.log(2);
}
console.log(3);
check();
console.log(4);
//  Answer: 3142
