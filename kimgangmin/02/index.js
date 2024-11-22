function solution(arr) {
	/**
	 * 중복값 제거
	 * [4, 2, 1, 3]
	 */
	const uniqueArr = [...new Set(arr)];

	/**
	 * sort : 정렬
	 * a - b : 오름차순 정렬
	 * a + b : 내림차순 정렬
	 */
	uniqueArr.sort((a, b) => a - b);

	return uniqueArr;
}

const arr = [4, 2, 1, 3, 4];

console.log(solution(arr));
