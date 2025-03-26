import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRouter from './routes/userRouter.js';
import { errorHandler, notFound } from './middleware/errors.js';

const app = express();
dotenv.config()


app.use(express.json());



app.use('/users', userRouter);


// error handler
app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => console.log(`server running on 3000`));

mongoose.connect('mongodb+srv://balazsvago:hihi@cluster0.hwhmo.mongodb.net/')
mongoose.connection
  .on('error', console.error)
  .on('open', () =>
    console.log(`Conntected to MongoDB `)
  );
