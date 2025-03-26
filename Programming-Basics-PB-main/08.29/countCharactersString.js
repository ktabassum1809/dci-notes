function count(string) {
	

    const array = string.split("")
    const reducedArray = array.reduce((acc, char)=> {
        acc[char] ? acc[char]++ : acc[char] = 1
        // acc[char] = (acc[char] || 0) +1 
        return acc
    }, {})
    


	return reducedArray
}

// alternative solution (not as common nor recommended)

/*function count(string) {
	let finalObject = {}
	let counter = 1

	if (string.length === 0) {
		return finalObject
	}

	const arraySorted = string.split("").sort()

	for (let i = 0; i < arraySorted.length; i++) {
		if (arraySorted[i] !== arraySorted[i - 1]) {
			counter = 1
			finalObject[arraySorted[i]] = counter
		} else if (arraySorted[i] === arraySorted[i - 1]) {
			counter++
			finalObject[arraySorted[i]] = counter
		}
	}

	return finalObject
} */

console.log(count("")) //{}
console.log(count("a")) //{ a: 1 }
console.log(count("ab")) //{ a: 1, b: 1 }
console.log(count("aba")) //{ a: 2, b: 1 }
console.log(count("aABCabbB")) //{ A: 1, B: 1, C: 1 }
