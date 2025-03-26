/*
 Task 8
 */

const quote = "Possessions never meant anything to me"; //  I'm not crazy
const vowels = "aeiou";

for (let i = 0; i < quote.length; i++) {
  if (vowels.includes(quote[i])) {
    console.log(quote[i]);
  }
}
