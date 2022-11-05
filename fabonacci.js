let arr = [8, 13, 21, 34, 55]

// O(N) Time Complexity | O(N) Space Complexity
const fanbanocci = n => {
	let n1 = 0
	let n2 = 1
	let next
	let arr = []

	let i = 0
	while (i < n) {
		arr.push(n1)
		next = n1 + n2
		n1 = n2
		n2 = next
		n--
	}
	return arr
}

// O(N) Time Complexity | O(1) Space Complexity
const isFabonacci = array => {
	let i = 2
	while (i < array.length) {
		let sum = array[i - 1] + array[i - 2]
		if (sum !== array[i]) {
			return false
		}
		i++
	}
	return true
}

console.log(isFabonacci(fanbanocci(5)))
