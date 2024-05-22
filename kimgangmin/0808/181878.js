function solution(myString, pat) {
	const pattern = pat.toLowerCase();

	return myString.toLowerCase().includes(pattern) ? 1 : 0;
}
