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

// #jobs1
const job1 = (cb) => {
	setTimeout(() => {
		cb("first");
	}, 500);
};
const job2 = (cb) => {
	setTimeout(() => {
		cb("second");
	}, 30);
};
const job3 = (cb) => {
	setTimeout(() => {
		cb("third");
	}, 900);
};

const jobs = [job1, job2, job3];
/**
Each of these jobs use setTimeout to simulate a long-running task.
Based on the code above, job2 will return first, followed by job1
and finally, job3 will return.
 *
Write a function called `asyncMap` that passes an array of job results
(in the same order in which they were originally passed in) to the final
callback e.g. ['first', 'second', 'third']
 */

//Answer:

const asyncMap = async (jobs, done) => {
	const promises = jobs.map((job) => new Promise((resolve) => job(resolve)));
	const results = await Promise.all(promises);
	done(results);
};
asyncMap(jobs, (results) => {
	console.log("pointer-->", results); // ['first', 'second', 'third']
});
