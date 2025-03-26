/* 
*write a function `guessNumber()`
?  Ask user to guess a random number, between 1 and 10 
"what is the number? guess in 3 attempts!" 
? user can guess three times
? if the given answer is correct, say 
"you're genius!"
? if wrong, ask again 
"wrong! what is the number? guess in `n` attempt!"
? if user didn't guess the right answer within 3 attempts, alert 
"game over"
? whenever user clicks cancel, exit the session
*/


//* Math.floor(Math.random() * ( max - min + min) + min)

// a function that generates a random number between 1 and 10
const random = () => Math.floor(Math.random() * (10 - 1 + 1) + 1);

function guessNumber() {
  let num = random();
  console.log(num) // check the number from the console tab for testing
  let answer = prompt(`Guess the number between 1 and 10! You've got 3 chances.`); // 1st attempt
  let count = 2; // available attempts after the 1st answer(line 62)

  while (+answer !== num && count > 0) {
    if (answer === null) break; // exit the game when user clicks cancel
    answer = prompt(`wrong! what is the number? guess in ${count} attempts`);
    count--;
  }
  // alert the user depending on the guessed number
  if (answer === null) return;
  else if (+answer !== num) alert("game over");
  else alert("right, you're genius!");
}
