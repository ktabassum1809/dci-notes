function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }


    let counterVertical = 0
    let counterHorizontal = 0
    
    walk.map(x => {
        if(x === "n") {
            return counterVertical++
        } else if(x === "s") {
            return counterVertical--
        } else if(x === "e") {
            return counterHorizontal++
        } else if (x === "w") {
            return counterHorizontal--
        }
    })

    return counterHorizontal === 0 && counterVertical === 0
  }


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //'should return false');
console.log(isValidWalk(['w', "e", "w", "e", 'w', "e", "w", "e", "o", "o"])) //'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //'should return false');



// Alternative solution

/*
function isValidWalk(walk) {
	if (walk.length !== 10) { // the walk has to take exactly ten minutes (10 directions of 1 min)
		return false
	}
  // we are checking how many movements per direction we have
	const east = walk.filter((x) => x === "e")
	const west = walk.filter((x) => x === "w")
	const north = walk.filter((x) => x === "n")
	const south = walk.filter((x) => x === "s")
	return east.length === west.length && north.length === south.length // we need to move to one direction as many times as to the opposite in order to end up at the same point in the end
}
    
*/