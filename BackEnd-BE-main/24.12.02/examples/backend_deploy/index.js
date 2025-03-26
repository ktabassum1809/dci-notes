import express from 'express';
/* import dotenv from 'dotenv'; */



const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5001;
/* dotenv.config() */

const {HOME_RESPONSE}=process.env
console.log(process.env)

app.get('/', (req, res) => {
  res.send(HOME_RESPONSE);
});









app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
