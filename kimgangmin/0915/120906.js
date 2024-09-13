function solution(n) {
	return n
		.toString()
		.split('')
		.reduce((sum, num) => sum + parseInt(num), 0);
}
