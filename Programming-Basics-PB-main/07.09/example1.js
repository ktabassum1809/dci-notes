// Problem: you have a string of boring text
// - You need to convert it to a string of cool text
// - Convert first and last characters to uppercase
// - For the other characters:
// - Convert "o"s to "0"s
// - Convert "l"s to "1"s
// - Convert "e"s to "3"s
// - Convert "s"s to "5"s
// - Convert "t"s to "7"s
// - also add some text art to the beginning and end

const boringText = "hello world, hello europe";
// expected output: '--==((H3110 w0r1d, h3110 3ur0pE))==--'
/*
pseudocode

let output = ""
for(each character in the string boringText){
    if(the current character is the first or the last character){
        add the capital letter of the current character to the output string
    } 
     if(the current character is "o"){
        add "0" to the output
     }else if(the current character is "l"){
        add "1" to the output
     }else if(the current character is "e"){
        add "3" to the output
     }else if(the current character is "s"){
        add "5" to the output
     }else if(the current character is "t"){
        add "7" to the output
     }  else {
        add the current character to the output as it is
     }
}

add some text art to the beginning and end to the output
printout the output
*/

let output = "H";

for (let i = 0; i < boringText.length; i++) {
  const currentChar = boringText[i];

  if (i === 0 || i === boringText.length - 1) {
    output += currentChar.toUpperCase();
   continue;
  }

   if (currentChar === "o") {
    output += "0";
  } else if (currentChar === "l") {
    output += "1";
  } else if (currentChar === "e") {
    output += "3";
  } else if (currentChar === "s") {
    output += "5";
  } else if (currentChar === "t") {
    output += "7";
  }else {
    output += currentChar
  }
}

output = `---===(((${output})))===---`

console.log(output)