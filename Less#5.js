let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 12, 0];
let num = 0;
let even = 0;
let odd = 0;
let zero = 0;
function numbers() {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number" || !isNaN(arr[i])) {
			num += 1;
			if (arr[i] === 0) {
				zero += 1;
			} else if (arr[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}
	console.log(`В массиве всего чисел - ${num}, четных - ${even}, нечетных - ${odd}, нулей - ${zero}`);
}
numbers();