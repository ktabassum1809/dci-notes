/**
 * Task 3
 */

let pin = "";

while (pin.length < 4) {
    const randomDigit = Math.ceil(Math.random() * 9);

    if (!pin.includes(randomDigit)) {
        pin += randomDigit;
    }
}

console.log(pin);