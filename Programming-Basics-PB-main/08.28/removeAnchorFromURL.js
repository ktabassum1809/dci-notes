// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// while loop until we find #
function removeUrlAnchor(url) {
	let output = ""
	let count = 0

	if (!url.includes("#")) {
		return url
	}

	while (url[count] !== "#") {
		output += url[count]
		count++
		// if (url.length === count) {
		//     break
		// }
	}
	return output
}

// for loop for each character
// if we find the character # we slice it

function removeUrlAnchorFor(url) {
	for (let i = 0; i < url.length; i++) {
		if (url[i] === "#") {
			const output = url.slice(0, i)
			return output
		}
	}
	return url
}

// split("#")[0]

function removeUrlAnchorArray(url) {
	return url.split("#")[0]
}

const removeUrlAnchorArray2 = url => url.split("#")[0]

console.log(removeUrlAnchorArray("www.codewars.compage=1ñjsgkjsafkjdsfhjds"))
