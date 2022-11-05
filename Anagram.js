let str1 = "asim"
let str2 = "misa"

// O(nlogn) Time Complexity | O(N) Space Complexity
const isAnagram = (str1, str2) => {
	const string1 = str1.split("").sort().join("")
	const string2 = str2.split("").sort().join("")
	return string1 === string2
}

// O(N) time complexity | O(1) Space Complexity
const isAnagramBestApproach = (str1, str2) => {
	// if length of both strings are not equal return false
	if (str1.length !== str2.length) return false

	let hashMap1 = {}
	let hashMap2 = {}

	// count every character repeation in str1
	for (let num of str1) {
		if (num in hashMap1) {
			hashMap1[num] += 1
			continue
		}
		hashMap1[num] = 1
	}

	// count every character repeation in str2
	for (let num of str2) {
		if (num in hashMap2) {
			hashMap2[num] += 1
			continue
		}
		hashMap2[num] = 1
	}

	// get keys of an hashmap
	const keys = Object.keys(hashMap1)

	// check if the values of both characters in hashmaps is equal or not
	for (let num of keys) {
		if (str1[num] !== str2[num]) {
			return false
		}
	}

	return true
}

console.log(isAnagram(str1, str2))
console.log(isAnagramBestApproach(str1, str2))
