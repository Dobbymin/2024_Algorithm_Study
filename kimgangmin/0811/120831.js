function solution(n) {
	let answer = 0;
	let N = parseInt(n / 2);

	for (let i = 1; i <= N; i++) {
		answer += i * 2;
	}

	return answer;
}
