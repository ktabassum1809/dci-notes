import express from 'express';
import mongoose from 'mongoose';


import userRouter from './routes/userRouter.js';
import { errorHandler, notFound } from './middleware/errors.js';

const app = express();



app.use(express.json());



app.use('/users', userRouter);


// error handler
app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => console.log(`server running on 3000`));

mongoose.connect('');
mongoose.connection
  .on('error', console.error)
  .on('open', () =>
    console.log(`Conntected to MongoDB / ${mongoose.connection.name}`)
  );
