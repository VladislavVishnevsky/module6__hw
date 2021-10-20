function getSum(a) {
	return function (b) {
		let x;
		x = a + b;
		return x;
	}
}

num = getSum(3);
console.log(num(2));