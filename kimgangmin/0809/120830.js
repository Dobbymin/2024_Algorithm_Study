function solution(n, k) {
	let answer = 0;
	let sheep = 12000;
	let drink = 2000;
	let service = parseInt(n / 10);

	answer = sheep * n + (k - service) * drink;

	return answer;
}
