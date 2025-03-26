const username = "Rodolfo1234567";

console.log(username[0]); // Expected output: "R"
console.log(username[1]); // Expected output: "o"

// Same logic as in line 23, but with some more steps
const usernameLength = username.length;
console.log(usernameLength); //14
const lastCharInd = usernameLength - 1; //13
const lastCharUser = username[lastCharInd];
console.log("last character from username is", lastCharUser);

const str = "A cute fox";

console.log(str[0]); // Character at index 0 is the 1st character
console.log(str[1]); // Character at index 1 is the 2nd character
console.log(str[2]); // Character at index 2 is the 3nd character
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);
console.log(str[9999999]); // expected output: undefined

const lastCharacterIndex = str.length - 1; // 9
console.log(str[lastCharacterIndex]); // str[9]

// A use case

const name1 = "John";
const name2 = "Ronald";
const name3 = "Reuel";
const name4 = "Tolkien";

// Help me output a string that gets the initials: "J.R.R. Tolkien"

console.log(`${name1[0]}.${name2[0]}.${name3[0]}. ${name4}`);
