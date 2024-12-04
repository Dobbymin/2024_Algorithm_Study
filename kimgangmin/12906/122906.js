function solution(arr) {
	var answer = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			answer.push(arr[i]);
		} else if (i !== 0 && arr[i - 1] !== arr[i]) {
			answer.push(arr[i]);
		}
	}

	return answer;
}
