//the 'sort' method can sort strings alphabetically (it will also work for single digit numbers):
const strArr = ["hello","John","Doe","lunch","break","doe","bread"]

 strArr.sort() //it overwrites the original array 

console.log(strArr)

//but with more than single digit numbers we have to add a callback function like:

const numsArr = [3,-9,1,5.2, 5.7, 8.12, 8,-13,141]

numsArr.sort((a,b)=> a - b)

console.log(numsArr)



