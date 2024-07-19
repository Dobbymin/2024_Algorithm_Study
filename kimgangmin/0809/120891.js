function solution(order) {
	var answer = 0;
	let orders = String(order);
	for (let i = 0; i < orders.length; i++) {
		if (orders[i] === '3') answer += 1;
		else if (orders[i] === '6') answer += 1;
		else if (orders[i] === '9') answer += 1;
	}
	return answer;
}
