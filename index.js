// Итерационный подсчет факториала
function factIterat(num) {
	if (num <= 0) return "Некорректное значение для вычисления факториала";
	else {
		let result = 1;
		for (let i = 1; i <= num; i++) {
			result *= i;
		}
		return result;
	}
}

// Рекурсивный расчет факториала
function factRec(num) {
	if (num <= 0) return "Некорректное значение для вычисления факториала";
	if (num === 1) return 1;
	return num * factRec(num - 1);
}
