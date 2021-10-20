function isPrime(num) {

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return (`- Не протое число`);
		} else if (num > 1000 || num <= 0) {
			return (`- Неверное значение`);
		} else return ('- Простое число');
	}
	return num > 1;

}

console.log('0', isPrime(0));
console.log('2', isPrime(2));
console.log('3', isPrime(3));
console.log('4', isPrime(4));
console.log('5', isPrime(5));
console.log('107', isPrime(107));
console.log('260', isPrime(260));
console.log('1001', isPrime(1001));