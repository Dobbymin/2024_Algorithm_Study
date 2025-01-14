function solution(arr) {
	arr.sort((a, b) => a - b);
	return arr;
}

const testCases = [
	{
		arr: [5, 2, 7, 3, 8],
		result: [2, 3, 5, 7, 8],
	},
	{
		arr: [5, 2, 7, 3, 8, 1],
		result: [1, 2, 3, 5, 7, 8],
	},
	{
		arr: [5, 2, 7, 3, 8, 1, 4],
		result: [1, 2, 3, 4, 5, 7, 8],
	},
	{
		arr: [5, 2, 7, 3, 8, 1, 4, 6],
		result: [1, 2, 3, 4, 5, 6, 7, 8],
	},
];

testCases.forEach((testCase, index) => {
	console.log(index);
	const { arr, result } = testCase;
	console.log(solution(arr));
});
