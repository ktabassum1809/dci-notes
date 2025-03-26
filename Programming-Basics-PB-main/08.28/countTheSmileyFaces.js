//return the total number of smiling faces in the array
function countSmileys(arr) {
    const possibleSmileys = [":-)", ":-D", ":~)",":~D", ":)", ":D", ";-)", ";-D", ";~)",";~D", ";)", ";D",]

    const filteredArray = arr.filter((smiley)=> possibleSmileys.includes(smiley))

    return filteredArray.length
  }
  
  // array with all possible smileys (smileyPossibilities) x
  // loop with if statement with .includes to the array smileyPossibilities 
  // if yes then push it to a new array
  // check for the length of that new array at the end


console.log(countSmileys([':)', ';(', ';}', ':-D', ':D']))