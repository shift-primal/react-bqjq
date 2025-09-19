export function getValue(arr) {
	return arr.map((card) => card.value).reduce((acc, cur) => acc + cur);
}
