let arr = new Map([
	['disk', 'glo'],
	['car', 'white'],
	['lemon', 'tree']
]);
for (let [key, value] of arr) {
	console.log(`Ключ - ${key}. Значение - ${value}`);
}
