const arr = [100, 502, 3, 303, 2, -4, 6, 400, 500]

// second largest number
// O(N) Time Complexity | O(1) Space Complexity
const getSecondLargestNumber = arr => {
	let largest = 0
	let secondLargest = 0
	let i = 0
	while (i < arr.length) {
		if (largest < arr[i]) {
			;[secondLargest, largest] = [largest, arr[i]]
		} else if (arr[i] > secondLargest && arr[i] < largest) {
			secondLargest = arr[i]
		}
		i++
	}
	return secondLargest
}

// second largest number's index
// O(N) Time Complexity | O(1) Space Complexity
const getSecondLargestNumberIdx = arr => {
	let largest = 0
	let secondLargestIdx = 0
	let secondLargest = 0
	let i = 0
	while (i < arr.length) {
		if (largest < arr[i]) {
			;[largest, secondLargest] = [arr[i], largest]
		} else if (arr[i] > secondLargest && arr[i] < largest) {
			secondLargest = arr[i]
			secondLargestIdx = i
		}
		i++
	}
	return secondLargestIdx
}

// Nth largest Number
// O(nlogn) Time Complexity | O(N) Space Complexity
const getNthLargestNumberIdx = (arr = [], nthLargestNum = 1) => {
	if (nthLargestNum <= 0) return -1
	const sortedArr = [...arr].sort((a, b) => a - b)
	const nthLargestNumIdx = arr.indexOf(sortedArr[sortedArr.length - nthLargestNum])
	return nthLargestNumIdx
}

console.log("Nth Largest Number Idx: ", getNthLargestNumberIdx(arr, 2))
console.log("Second Largest Number: ", getSecondLargestNumber(arr))
console.log("Second Largest Number Idx: ", getSecondLargestNumberIdx(arr))
