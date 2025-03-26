import express from "express"
import { encrypt, decrypt } from "./crypto.js"

const app = express()
app.use(express.json())

// curl -X POST http://localhost:4000/encrypt -H "Content-Type: application/json" -d '{"message": "Hello-WORLD"}'
app.post("/encrypt", (req, res) => {
    // Take in message from request
    const message = req.body.message
    // Respond with encrypted message
    const encrypted = encrypt(message)
    res.json({ encrypted })
})

// curl -X POST http://localhost:4000/decrypt -H "Content-Type: application/json" -d '{"encrypted": "Ur#i!#i!b#@potpourri@#JBEYQ"}'
app.post("/decrypt", (req, res) => {
    // Take in message from request
    const encrypted = req.body.encrypted
    // Respond with decrypted message
    const decrypted = decrypt(encrypted)
    res.json({ decrypted })
})

export default app