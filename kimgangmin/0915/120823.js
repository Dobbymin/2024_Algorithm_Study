const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = line.split(' ');
}).on('close', function () {
	re(Number(...input));
});

const re = (max) => {
	for (let i = 1; i < max + 1; i++) {
		console.log('*'.repeat(i));
	}
};
