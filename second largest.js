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

console.log(getSecondLargestNumberIdx(arr))
console.log(getSecondLargestNumber(arr))
