/**
 * Task 4
 */

let pin = "";
let characters = "abcdefghijklmnopqrstuvwxyz!+?*";

while (pin.length < 6) {
    const randomCharacterIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomCharacterIndex];
    if (!pin.includes(randomCharacter)) {
        pin += randomCharacter;
    }
}

console.log(pin);
