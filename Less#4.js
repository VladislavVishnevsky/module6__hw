let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
a = +a;
b = +b;

function showNumber() {

	if (a <= b) {
		console.log(a);
		a++;
	}


}
setInterval(showNumber, 1000, a);