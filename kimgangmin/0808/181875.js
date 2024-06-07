function solution(strArr) {
	return strArr.map((val, idx) =>
		idx % 2 === 0 ? val.toLowerCase() : val.toUpperCase()
	);
}
