// We can also perform some complex operations using "string methods"
// Don't worry about what "method" means yet, we'll first just use them

const msg = "Hello world!"
console.log("Original:", msg)

const uppercase = msg.toUpperCase() 
console.log("Uppercase:", uppercase)

const lowercase = msg.toLowerCase()
console.log("Lowercase:", lowercase)

// Let's check the original

console.log("Original:", msg) // Even with "let" it would not change


/*
Slice

With slice() we can get a portion (or slice) of a string.
A slice is a sequence of adjacent characters between 2 indexes

Important:
- the first index is inclusive
- the second index is exclusive
*/

const story = "A quick brown fox jumped over the lazy cow"
const slice = story.slice(14, 24)
console.log("Slice of story: ", slice)

// If leave out the second index, we'll get the string until the end
const firstName = "sophia"
console.log(firstName.slice(1))

// We could get a string with only the first letter upper case
const capitalized = firstName[0].toUpperCase() + firstName.slice(1)
console.log(capitalized)

/*
Includes

With includes() we can check is a string contains another string
The response will be a boolean: true or false
*/

const greeting = "Greetings earthlings! We Come In Peace!";
console.log(`Is Peace included? ${greeting.includes("Peace")}`)
console.log(`Is peace included? ${greeting.includes("peace")}`)

// Sometimes when examining strings, the case could be ignored
const lowercased = greeting.toLowerCase()
console.log(`Is peace or Peace included? ${lowercased.includes("peace")}`)

/*
Trim

The method trim() creates a new string and removes spaces
at the beginning and at the end.
*/

const color = "  green  "
const trimmedColor = color.trim()
console.log(trimmedColor)