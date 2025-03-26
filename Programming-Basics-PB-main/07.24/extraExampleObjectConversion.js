const pastry1 = {
    name: "baba",
    flavour: "rum",
    sweet: true,
    price: 2
}

const pastryKeys = Object.keys(pastry1)

console.log(pastryKeys)

const pastryChar = Object.values(pastry1)

console.log(pastryChar)

const pastryEntries = Object.entries(pastry1)

console.log(pastryEntries)

console.clear()

const pastryArray1 = pastryEntries[0]

console.log(pastryArray1)

const pastryArrayBaba = pastryArray1[1]

console.log(pastryArrayBaba)