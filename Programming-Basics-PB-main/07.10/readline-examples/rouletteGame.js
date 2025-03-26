import rls from 'readline-sync'

/*- Let's practice by building a small game
    - It's a simplified roulette game! ✅
    - Then, it asks if you are over 18 ✅
    - If you are not, the program stops ✅
    - You start with 100€ ✅
    - Every turn costs 1€ ✅
    - Every turn:
        - 1. If you are out of money, the game stops ✅
        - 2. The game asks if you want to stop or continue ✅
            - If you stop, you keep the rest of your money ✅
        - 3. The game asks if you want to bet even or odd numbers ✅
        - 4. The game makes a random number between 0-100 ✅
            - If it's even and you chose even numbers, you win 2€ ✅
            - If it's even and you chose odd numbers, you lose ✅
            - If it's 0 you lose ✅
*/

// start with 100€

let age = rls.questionInt("How old are you? ")

let wallet = 100

while (wallet > 0 && age >= 18) {
    wallet--
    const bet = rls.question("Do you want to bet even or odd? (e/o) ")
    const number = Math.floor(Math.random()*101)
    console.log(`The number is ${number}`)

    if (number === 0){
    console.log(`sorry, you lost, you loser. Your wallet currently holds ${wallet}€`)
    } else if (number % 2 === 0 && bet === "e") {
        wallet += 2
        console.log(`you won 2€ and your wallet currently holds ${wallet}€`)
    } else if (number % 2 !== 0 && bet === "o"){
        wallet += 2
        console.log(`you won 2€ and your wallet currently holds ${wallet}€`)
    } else {
        console.log(`sorry, you lost, you loser. Your wallet currently holds ${wallet}€`)
    } 

    if (wallet > 0) {
        const play = rls.question("Do you want to keep playing? (y/n)")
        if (play === "y" || play === "yes") {
        continue
        } else {
         break
        }
    }
}

if (age < 18) {
    console.log("please, come back when you are older or don't come back")
}


if (wallet < 1) {
    console.log(`you run out of money`)
} else if (age >= 18) {
    console.log(`you decided to stop playing. Your current money is ${wallet}€`)
}
