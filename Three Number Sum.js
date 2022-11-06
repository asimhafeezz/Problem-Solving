const arr = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0

// O(N^2) Time Complexity | O(N) Space Complexity
const threeNumberSum = (array, targetSum) => {
	array.sort((a, b) => a - b)

	let arr = []

	for (let i = 0; i < array.length; i++) {
		let num = array[i]
		let leftPtr = i + 1
		let rightPtr = array.length - 1
		while (leftPtr < rightPtr) {
			const result = num + array[leftPtr] + array[rightPtr]
			if (result === targetSum) {
				arr.push([num, array[leftPtr], array[rightPtr]])
				leftPtr++
				rightPtr--
			} else if (result < targetSum) {
				leftPtr++
			} else if (result > targetSum) {
				rightPtr--
			}
		}
	}
	return arr
}

console.log(threeNumberSum(arr, targetSum))
