const arr = [7, 6, 4, -1, 1, 2]
const targetSum = 16

// O(N^3) Time Complexity | O(N^2) Space Complexity
const fourNumberSum = (array, targetSum) => {
	array.sort((a, b) => a - b)

	let arr = []

	for (let i = 0; i < array.length; i++) {
		let num1 = array[i]
		for (let j = i + 1; j < array.length; j++) {
			let num2 = array[j]
			let leftPtr = j + 1
			let rightPtr = array.length - 1
			while (leftPtr < rightPtr) {
				const result = num1 + num2 + array[leftPtr] + array[rightPtr]
				if (result === targetSum) {
					arr.push([num1, num2, array[leftPtr], array[rightPtr]])
					leftPtr++
					rightPtr--
				} else if (result < targetSum) {
					leftPtr++
				} else {
					rightPtr--
				}
			}
		}
	}
	return arr
}

// const fourNumberSum_Solution2 = (array, targetSum) => {
// 	let arr = []
// 	let hashMap = {}

// 	for (let i = 2; i < array.length; i++) {
// 		let num = array[i - 2]
// 		let num2 = array[i - 1]
// 		let leftPtr = i
// 		let rightPtr = array.length - 1
// 		let twoSum = num + num2
// 		console.log({ twoSum })
// 		hashMap[twoSum] = true
// 		while (leftPtr < rightPtr) {
// 			const result = targetSum - (array[leftPtr] + array[rightPtr])
// 			if (result in hashMap) {
// 				arr.push([num, num2, array[leftPtr], array[rightPtr]])
// 				leftPtr++
// 				rightPtr--
// 			} else if (result < targetSum) {
// 				leftPtr++
// 			} else if (result > targetSum) {
// 				rightPtr--
// 			}
// 		}
// 	}
// 	return arr
// }

console.log(fourNumberSum(arr, targetSum))
