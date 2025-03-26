// Problem: you received a string of morse code and you
// need to convert it to a human-readable string. Luckily
// you know the message is only made of numbers.
// You also have an array containing the morse code for numbers

const morseNumbers = [
    '-----', // 0
    '.----', // 1
    '..---', // 2
    '...--', // 3
    '....-', // 4
    '.....', // 5
    '-....', // 6
    '--...', // 7
    '---..', // 8
    '----.', // 9
]

const input = '...-- .---- ...-- ...-- --...'

// By checking manually, we can see that the morse code says 31337
// So we can create our test case
//console.log(output === '31337') as test case


/*
Pseudocode
- Create a variable to store the output
- Split the input string into an array of morse code segments
- Loop over the morse code segments
    - Loop over the morseNumbers array
        - If the morse code matches the current segment
        - Add the index of the morse number to the output
*/

let output = "";

let inputArr = input.split(" ") // [ '...--', '.----', '...--', '...--', '--...' ]

console.log(inputArr)

for(let i=0; i<inputArr.length; i++){

    for(let j =0; j<morseNumbers.length; j++){
        if(inputArr[i] === morseNumbers[j]){
            output += j
        }
    }
}

console.log(output === '31337')

console.log(output)
console.log(typeof output)

