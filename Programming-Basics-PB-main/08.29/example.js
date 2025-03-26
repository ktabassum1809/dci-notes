function firstNonConsecutive(arr) {
	const matchArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	// const output = [];

	if (arr.length <= 1) {
		return null;
	}

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
        console.log("element", element)
        console.log("matchArray[i]", matchArray[i])

		if (element !== matchArray[i]) {
			// output.push(element);
            return matchArray[i+1]
		}
	}
    console.log(output)
	return null;
}

console.log(firstNonConsecutive([2, 3, 5, 6]))