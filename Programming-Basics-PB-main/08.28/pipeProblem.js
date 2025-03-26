// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

//Input:  [1,3,5,6,7,8] Output: [1,2,3,4,5,6,7,8]

function pipeFix(numbers) {
	const newArray = []
	const first = numbers[0]
    const end = numbers.at(-1)
    
    for (let i = first; i <= end; i++) {
		newArray.push(i)
	}
    return newArray
}

console.log(pipeFix([-4,1,3,5,6,7,8]))
