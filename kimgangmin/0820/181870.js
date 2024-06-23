function solution(strArr) {
	var answer = [];
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].includes('ad') === false) {
			answer.push(strArr[i]);
		}
	}

	return answer;
}
