const fs = require("fs")

let enryptHashMap = {
	This: "@",
	to: "$",
}

let decryptHashMap = {
	"@": "This",
	$: "to",
}

const compressFile = () => {
	try {
		const txtFile = fs.readFileSync("./file.txt", { encoding: "utf8" })
		const data = txtFile.split(" ")
		for (let i = 0; i < data.length; i++) {
			let letter = data[i]
			if (letter in enryptHashMap) {
				data[i] = enryptHashMap[letter]
			}
		}
		return data.join(" ")
	} catch (err) {
		console.log(err)
	}
}

const unCompressFile = () => {
	try {
		const txtFile = fs.readFileSync("./file.txt", { encoding: "utf8" })
		const data = txtFile.split(" ")
		for (let i = 0; i < data.length; i++) {
			const letter = data[i]
			if (letter in decryptHashMap) {
				data[i] = decryptHashMap[letter]
			}
		}
		return data.join(" ")
	} catch (err) {
		console.log({ err })
	}
}

console.log(compressFile())
console.log(unCompressFile())
