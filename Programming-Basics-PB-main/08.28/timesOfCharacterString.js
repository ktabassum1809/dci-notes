// create an empty string

// loop through the string and with an if statement every time we encounter the character push it to the new array

// check the lenght of the new array

function strCount(str, letter){  
    let newString = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            newString += letter
        }
    }
    return newString.length
  }

function strCountFilter(str, letter) {
    const newArray = str.split("").filter((char)=> char === letter)
    return newArray.length
}

// const strCountFilterNinja = (str, letter) => str.split("").filter((char)=> char === letter).length



console.log(strCountFilterNinja('Hello', 'o')) // 1);
console.log(strCountFilterNinja('Hello', 'l')) // 2);
console.log(strCountFilterNinja('',      'z')) // 0);