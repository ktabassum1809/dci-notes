import express from 'express';
import dotenv from 'dotenv'

import usersRouter from './routes/usersRouter.js';
import { errorHandler, notFound } from './middlewares/errors.js';
const app = express();
app.use(express.json())
//const PORT = 5001;

dotenv.config();

//const { PORT } = process.env;
//const PORT=process.env.PORT

const {API_KEY,DB}=process.env
const PORT=process.env.PORT || 5005
console.log(PORT);



console.log(process.env)
console.log(API_KEY)
console.log(DB);
app.get('/', (req, res) => {
  res.send('homepage');
});




app.use('/users',usersRouter)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
