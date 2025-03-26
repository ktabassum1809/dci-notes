const names = ["Nausica123", "Simon134", "Viktor3", "Ashwini456"]

console.log("-------------accessing an item-------------")

console.log(names) // ["Nausica123", "Simon134", "Viktor3", "Ashwini456"]
console.log(names.length) // 4
console.log(typeof(names)) // object

const firstItem = names[0] // "Nausica123"
console.log(firstItem)

console.log(names[3]) // "Ashwini456"

console.log(names.at(1)) //"Simon134"
console.log(names.at(-1)) // "Ashwini456"

console.clear()
console.log("-------------modifying an item-------------")

console.log(names)
names[3] = "Essam"
console.log(names)

// This works even though "names" is a const:
// We are not assigning a new value for "names"
// when you declare an array with const, the
// contents of the array are not protected,
// meaning you _can_ modify the contents!

console.clear()
console.log("-------------adding an item-------------")

console.log(names)
names[4] = "Brian66"
console.log(names)



names[names.length] = "Coffee" //names[5]

console.log(names)

names[10] = "Tea"

console.log(names)
