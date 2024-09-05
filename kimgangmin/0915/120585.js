function solution(array, height) {
	var answer = array.filter((item) => item > height);
	return answer.length;
}
