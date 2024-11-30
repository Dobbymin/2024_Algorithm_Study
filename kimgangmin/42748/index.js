function sliceArr(array, start, end, k) {
	const arr = array.slice(start, end).sort((a, b) => a - b);
	return arr[k];
}

function solution(array, commands) {
	var answer = [];

	let i = 0,
		j = 0,
		k = 0;

	for (let n = 0; n < commands.length; n++) {
		i = commands[n][0] - 1;
		j = commands[n][1];
		k = commands[n][2] - 1;

		answer.push(sliceArr(array, i, j, k));
	}
	return answer;
}
