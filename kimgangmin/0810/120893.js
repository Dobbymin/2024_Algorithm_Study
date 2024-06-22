function solution(my_string) {
	var answer = '';
	for (let i = 0; i < my_string.length; i++) {
		if (my_string[i] === my_string[i].toLowerCase()) {
			answer += my_string[i].toUpperCase();
		} else if (my_string[i] === my_string[i].toUpperCase()) {
			answer += my_string[i].toLowerCase();
		}
	}
	return answer;
}
