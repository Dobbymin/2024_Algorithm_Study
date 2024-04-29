function solution(numbers) {
	let answer = [];

	for (let i = 0; i < numbers.length; i++) {
		answer.push(numbers[i] * 2);
	}

	return answer;
}
