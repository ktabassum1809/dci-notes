// - Create a program that sums all the individual digits of a number and then checks if it's divisible by three.

// - According to the book, if the sum of numbers is divisible by three, then is not a prime number. Let's check the number 1173 first.

// - After that, check with other numbers and see if your program is effective with all numbers from 2 to 100. If not, create a program with your own logic.

function sumDigits(number) {
  let sum = number;
  let total

  if (sum < 10) {
    //1173 is not smaller than 10
    return sum;
  } else {
    while (sum > 9) {
      //1173 is greater than 9 - 12 is greater than 9
      total = 0;
      let str = sum.toString(); // "1173" - "12"
      let arrayNums = str.split(""); //["1","1","7","3"] - ["1", "2"]
      for (let i = 0; i < arrayNums.length; i++) {
        total += Number(arrayNums[i]);
      }
      sum = total; // 12 - 3
    }
  }
  return total;
}

// This function sums only once:
// function sumDigits(num){
//     let str = num.toString()
//     let numArr = str.split(``)
//     let result = 0
//     for (let i=0; i<numArr.length; i++){
//         result+=Number(numArr[i])
//     }
//     return result
    
    
// }


function isPrime(longNum){
    if (longNum === 3) {
        return `${longNum} is prime`
    } else {
        let sumNumbers = sumDigits(longNum) // 1173 -> 3
        if (sumNumbers % 3 === 0){
            return `${longNum} is not prime`
        } else {
            return `${longNum} is prime`
        }
    }
}

//console.log(isPrime(1173))


function isPrimeEffective(number) {
    if (number < 2){
        return `number ${number} is not prime`
    }
    for (let i = 2; i < number; i++) {
       if (number % i === 0) {
         return `number ${number} is not prime`
       }
    }
    return `the number ${number} is prime`
}

// console.log(isPrimeEffective(1173))

// console.log("this numbers are prime")
// console.log(isPrimeEffective(2));
// console.log(isPrimeEffective(3));
// console.log(isPrimeEffective(5));
// console.log(isPrimeEffective(7));
// console.log(isPrimeEffective(11));
// console.log(isPrimeEffective(13));
// console.log(isPrimeEffective(17));
// console.log(isPrimeEffective(19));
// console.log(isPrimeEffective(23));
// console.log(isPrimeEffective(29));
// console.log(isPrimeEffective(31));
// console.log(isPrimeEffective(37));
// console.log(isPrimeEffective(41));
// console.log(isPrimeEffective(43));
// console.log(isPrimeEffective(47));
// console.log(isPrimeEffective(53));
// console.log(isPrimeEffective(59));
// console.log(isPrimeEffective(61));
// console.log(isPrimeEffective(67));
// console.log(isPrimeEffective(71));
// console.log(isPrimeEffective(73));
// console.log(isPrimeEffective(79));
// console.log(isPrimeEffective(83));
// console.log(isPrimeEffective(89));
// console.log(isPrimeEffective(97));

// console.log("this numbers are not prime:")
// console.log(isPrimeEffective(12));
// console.log(isPrimeEffective(14));
// console.log(isPrimeEffective(15));
// console.log(isPrimeEffective(16));
// console.log(isPrimeEffective(18));
// console.log(isPrimeEffective(20));
// console.log(isPrimeEffective(21));
// console.log(isPrimeEffective(22));
// console.log(isPrimeEffective(24));
// console.log(isPrimeEffective(25));
// console.log(isPrimeEffective(26));
// console.log(isPrimeEffective(27));
// console.log(isPrimeEffective(28));
// console.log(isPrimeEffective(30));
// console.log(isPrimeEffective(32));
// console.log(isPrimeEffective(33));
// console.log(isPrimeEffective(34));
// console.log(isPrimeEffective(35));
// console.log(isPrimeEffective(36));
// console.log(isPrimeEffective(38));
// console.log(isPrimeEffective(39));
// console.log(isPrimeEffective(40));
// console.log(isPrimeEffective(42));
// console.log(isPrimeEffective(44));
// console.log(isPrimeEffective(45));
// console.log(isPrimeEffective(46));
// console.log(isPrimeEffective(48));
// console.log(isPrimeEffective(49));
// console.log(isPrimeEffective(50));
// console.log(isPrimeEffective(51));
// console.log(isPrimeEffective(52));
// console.log(isPrimeEffective(54));
// console.log(isPrimeEffective(55));
// console.log(isPrimeEffective(56));
// console.log(isPrimeEffective(57));
// console.log(isPrimeEffective(58));
// console.log(isPrimeEffective(60));
// console.log(isPrimeEffective(62));
// console.log(isPrimeEffective(63));
// console.log(isPrimeEffective(64));
// console.log(isPrimeEffective(65));
// console.log(isPrimeEffective(66));
// console.log(isPrimeEffective(68));
// console.log(isPrimeEffective(69));
// console.log(isPrimeEffective(70));
// console.log(isPrimeEffective(72));
// console.log(isPrimeEffective(74));
// console.log(isPrimeEffective(75));
// console.log(isPrimeEffective(76));
// console.log(isPrimeEffective(77));
// console.log(isPrimeEffective(78));
// console.log(isPrimeEffective(80));
// console.log(isPrimeEffective(81));
// console.log(isPrimeEffective(82));
// console.log(isPrimeEffective(84));
// console.log(isPrimeEffective(85));
// console.log(isPrimeEffective(86));
// console.log(isPrimeEffective(87));
// console.log(isPrimeEffective(88));
// console.log(isPrimeEffective(90));
// console.log(isPrimeEffective(91));
// console.log(isPrimeEffective(92));
// console.log(isPrimeEffective(93));
// console.log(isPrimeEffective(94));
// console.log(isPrimeEffective(95));
// console.log(isPrimeEffective(96));
// console.log(isPrimeEffective(98));
// console.log(isPrimeEffective(99));
// console.log(isPrimeEffective(100));

console.log(isPrimeEffective(104739))