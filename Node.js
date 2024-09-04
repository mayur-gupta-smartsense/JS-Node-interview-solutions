// #Node1
// Make a simple POST request.
const http = require("http");

// Data to be sent in the POST request
const postData = JSON.stringify({
	key: "value", // Your data goes here
});

const options = {
	hostname: "example.com",
	port: 80,
	path: "/12",
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		"Content-Length": Buffer.byteLength(postData),
	},
};

const req = http.request(options, (res) => {
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log(`Response: ${data}`);
	});
});

req.on("error", (e) => {
	console.error(`Problem with request: ${e.message}`);
});

// Write data to the request body
req.write(postData);
req.end();
