import { encrypt, decrypt } from './crypto.js';

const messages = [
    "Hello, world! This is a secret message.",
    "I like, I like, I like, I like, I like",
    "I like RISK, it's a board game!",
    "5-4-3-2-1, Thunderbirds are go!"
]

const encrypted = []

messages.forEach((message) => {
    encrypted.push(encrypt(message))
})

console.log(encrypted)

const decrypted = []
encrypted.forEach((message) => {
    decrypted.push(decrypt(message))
})

console.log(decrypted)