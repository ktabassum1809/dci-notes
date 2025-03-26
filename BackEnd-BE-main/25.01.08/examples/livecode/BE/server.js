import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/errors.js';
import commentRouter from './routes/commentRouter.js';
const app = express();

dotenv.config();


app.use(express.json());
app.use(cors());


app.use('/comments', commentRouter);

// error handler
app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => console.log(`server running on ${3000}`));

mongoose.connect('');
mongoose.connection
  .on('error', console.error)
  .on('open', () =>
    console.log(`Conntected to MongoDB / ${mongoose.connection.name}`)
  );
