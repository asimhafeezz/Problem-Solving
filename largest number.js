let arr = [101, -3, -1000, 2, 4, 100, 42, 5, 6]

const getLargestNumber = arr => {
	let num = 0

	for (let i = 0; i < arr.length; i++) {
		if (num < arr[i]) {
			num = arr[i]
		}
	}
	return num
}

console.log(getLargestNumber(arr))
