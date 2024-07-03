function solution(a, b) {
	let A = '';
	let B = '';
	A = String(a) + String(b);
	B = String(b) + String(a);
	return A > B ? Number(A) : Number(B);
}
