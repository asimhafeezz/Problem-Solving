let arr = [4, 2, 6]
const targetSum = 8

// O(N^2) Time Complexity | O(1) Space Complexity
const twoNumberSum_Solution1 = (array, targetSum) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return []
}

// O(N) Time Complexity | O(1) Space Complexity
const twoNumberSum_Solution2 = (array, targetSum) => {
	let hashMap = {}
	let i = 0
	let j = array.length
	while (i < j) {
		const y = targetSum - array[i]
		if (array[i] in hashMap) {
			return [y, array[i]]
		}
		hashMap[y] = true
		i++
	}
	return []
}

// O(N) Time Complexity | O(1) Space Complexity
const twoNumberSum_Solution3 = (array, targetSum) => {
	let i = 0
	let j = array.length - 1
	while (i < j) {
		const result = array[i] + array[j] === targetSum
		if (result) {
			return [array[i], array[j]]
		} else if (result < targetSum) {
			i++
		} else {
			j--
		}
	}
	return []
}

console.log(twoNumberSum_Solution1(arr, targetSum))
