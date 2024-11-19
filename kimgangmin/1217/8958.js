const fs = require('fs');

// const input = fs.readFileSync('./example.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	let sum = 0;
	let count = 0;
	for (let j = 0; j < input[i].length; j++) {
		// console.log(input[i][j]);

		if (input[i][j] === input[i][j + 1]) {
			count += 1;
		} else {
			count = 0;
		}

		if (input[i][j] === 'O') {
			if (count === 0) {
				sum += 1;
			} else if (count > 0) {
				sum += 1 + count;
			}
		}

		// if (input[i][j] === 'O' && count === 0) {
		// 	sum += 1;
		// } else if (input[i][j] === 'O' && count > 0) {
		// 	sum += 1 + count;
		// }
	}
	// console.log(input.indexOf(input[i]) + '번째 줄 점수: ' + sum);
	console.log(sum);
}
