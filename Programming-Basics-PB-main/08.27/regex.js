let text = "Is this all there is?";
let pattern = /[^h-z]/ig; // a regex pattern to look for all characters other than the characters between h and z
let result = text.match(pattern);
console.log(result)

