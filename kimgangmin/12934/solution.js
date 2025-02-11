function solution(n) {
	var answer = 0;
	const root_num = Math.sqrt(n);

	if (Number.isInteger(root_num)) {
		answer = (root_num + 1) ** 2;
	} else {
		answer = -1;
	}

	return answer;
}
