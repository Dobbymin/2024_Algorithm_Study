const fs = require('fs');

// const input = fs.readFileSync('./test.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input.map((num) => num.split(' ').map(Number));
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i][0] === 0) break;

	numbers[i].sort((a, b) => a - b);

	if (numbers[i][0] ** 2 + numbers[i][1] ** 2 === numbers[i][2] ** 2) {
		console.log('right');
	} else {
		console.log('wrong');
	}
}
