import express from 'express';
import userRouter from './routers/userRouter.js';
/* import mongoose from 'mongoose'; */
import {connectDB} from './db.js';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errors.js';
const app = express();
dotenv.config();
const port = process.env.PORT || 5001;

// database connection
// mongoose.connect(process.env.DB_URL)
//   .then(()=> console.log('connection established! 😀'))
//   .catch((err)=>console.log(`connection Error: ${err.message}`))

// alternative: database connection using events
// mongoose.connect(process.env.DB_URL);
// mongoose.connection.on('connected', () => {
//   console.log('Connection established! 😎');
// });

// mongoose.connection.on('error', (err) => {
//   console.log(`connection error: ${err.message}😞`)
// })

//another alternative (using function)
/*async function connectToDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to database');
  } catch (error) {
    console.log(error.message);
  }
} */




/* const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('connected to DB')
  } catch (error) {
    console.log(error.message);
  }
};
 */


connectDB();

// middleware
app.use(express.json());

// routers
app.use('/users', userRouter);

// error handler
app.use(notFound);

app.use(errorHandler);

app.listen(port, console.log(`Server is up on port: ${port} 🚀`));
