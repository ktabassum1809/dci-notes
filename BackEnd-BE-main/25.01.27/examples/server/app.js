import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './Routes/userRoutes.js';
import { errorHandler } from './middleware/errors.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

//ROUTES

app.use('/users', userRouter);

//ERROR-HANDLER

app.use(errorHandler);

//LISTENING TO PORT
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

//CONNECT TO MONGO_DB

mongoose.connect(process.env.DB_URI);

mongoose.connection.on('error', console.error).on('open', () => {
  console.log('Connected to DB');
});
