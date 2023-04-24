// Итерационный подсчет факториала
function factIterat(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}

// Рекурсивный расчет факториала
function factRec(num) {
	if (num === 1) return 1;
	return num * factRec(num - 1);
}
