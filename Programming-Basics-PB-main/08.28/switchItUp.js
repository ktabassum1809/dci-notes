// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

function switchItUp(number) {
	let output = ""
	switch (number) {
		case 0:
			output = "Zero"
			break
		case 1:
			output = "One"
			break
		case 2:
			output = "Two"
			break
		case 3:
			output = "Three"
			break
		case 4:
			output = "Four"
			break
		case 5:
			output = "Five"
			break
		case 6:
			output = "Six"
			break
		case 7:
			output = "Seven"
			break
		case 8:
			output = "Eight"
			break
		case 9:
			output = "Nine"
			break
		default:
			output = "That number can't be processed"
	}
	return output
}

console.log(switchItUp(40))

console.log(switchItUp(1)) //"One");
console.log(switchItUp(3)) //"Three");
console.log(switchItUp(5)) //"Five");
