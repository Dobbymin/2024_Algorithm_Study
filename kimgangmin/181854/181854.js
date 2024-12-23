function solution(arr, n) {
	var answer = [];

	if (arr.length % 2 === 0) {
		for (let i = 0; i < arr.length; i++) {
			if (i % 2 !== 0) {
				answer.push(arr[i] + n);
			} else if (i % 2 === 0) {
				answer.push(arr[i]);
			}
		}
	} else if (arr.length % 2 !== 0) {
		for (let i = 0; i < arr.length; i++) {
			if (i % 2 !== 0) {
				answer.push(arr[i]);
			} else if (i % 2 === 0) {
				answer.push(arr[i] + n);
			}
		}
	}
	return answer;
}
