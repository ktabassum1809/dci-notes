const pastries = ["eclair", "religieuse", "mille-feuille"]

// push() - add elements to the end of an array

pastries.push("eclair")

pastries.push("croissant", "churro", "cinnamon bun")

// unshift() - add elements to the beginning of an array

pastries.unshift("baklava", "babà")
console.log(pastries)

// pop() - removes the last element from an array

pastries.pop()

// shift() - removes the first element from an array

pastries.shift()
console.log(pastries)

/* ------------------------------------------
------------------slice()--------------------
------------------------------------------ */
console.clear()  
console.log(pastries) // ['babà','eclair','religieuse','mille-feuille','eclair','croissant','churro']

const newPastries = pastries.slice(2, 5)
console.log(newPastries) // ['religieuse','mille-feuille','eclair']
console.log(pastries) // ['babà','eclair','religieuse','mille-feuille','eclair','croissant','churro']

pastries[3] = "Macaron"

console.log(pastries)
console.log(newPastries)

// includes() 

console.log(pastries.includes("Macaron")) // true
console.log(newPastries.includes("Macaron")) // false

console.log(pastries.includes("Macar")) // false