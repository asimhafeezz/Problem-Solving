// get the character which does not repeat on both strings
const str1 = "asim"
const str2 = "asif"

// O(N) Time Complexity | O(N) Space complexity
const getNonRepeatedNumbers = (str1, str2) => {
	let hashMap1 = {}
	let hashMap2 = {}

	let arr = []

	for (let num of str1) {
		if (num in hashMap1) {
			hashMap1[num] += 1
			continue
		}
		hashMap1[num] = 1
	}

	for (let num of str2) {
		if (num in hashMap2) {
			hashMap2[num] += 1
			continue
		}
		hashMap2[num] = 1
	}

	const keys1 = Object.keys(hashMap1)
	const keys2 = Object.keys(hashMap2)

	let i = 0
	while (i < keys1.length) {
		if (!(str1[i] in hashMap2)) {
			arr.push(str1[i])
		}
		i++
	}

	let j = 0
	while (j < keys2.length) {
		if (!(str2[j] in hashMap1)) {
			arr.push(str2[j])
		}
		j++
	}

	return arr
}

console.log(getNonRepeatedNumbers(str1, str2))
