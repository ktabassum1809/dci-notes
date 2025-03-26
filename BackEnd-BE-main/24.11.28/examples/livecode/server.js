import express from 'express';


import usersRouter from './routes/usersRouter.js';
import { errorHandler, notFound } from './middlewares/errors.js';
const app = express();
app.use(express.json())
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('homepage');
});




app.use('/users',usersRouter)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
