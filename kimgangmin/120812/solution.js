function solution(array) {
	const set = new Set(array);
	const arr = Array.from(set);
	const result = arr.map((i) => {
		return array.filter((element) => element === i).length;
	});

	const max = Math.max(...result);

	const num = result.filter((element) => max === element).length;

	if (num > 1) {
		return -1;
	} else {
		const index = result.findIndex((e) => e === max);
		return arr[index];
	}
}
