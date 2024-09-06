function solution(s1, s2) {
	let answer = 0;
	if (s1.length > s2.length) {
		for (let i = 0; i < s2.length; i++) {
			if (s1.includes(s2[i])) {
				answer += 1;
			}
		}
	} else {
		for (let i = 0; i < s1.length; i++) {
			if (s2.includes(s1[i])) {
				answer += 1;
			}
		}
	}
	return answer;
}
