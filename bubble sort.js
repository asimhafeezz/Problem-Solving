// bubble sort
// O(N^2) Time Complexity | O(1)
let arr = [2, 10, -3, 5]
function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}
}

sort(arr)
console.log({ arr })
