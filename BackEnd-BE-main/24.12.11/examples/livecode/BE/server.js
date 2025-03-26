import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors';
import { recordsRouter } from './routes/recordRoutes.js';
dotenv.config();


const { PORT,DB_URI } = process.env;

const app = express();
app.use(cors())
app.use(express.json())



// Routes

app.use('/records',recordsRouter)




app.listen(PORT, () => console.log(`server running on port ${PORT}`));

mongoose.connect(DB_URI)
mongoose.connection.on('connected', ()=>{console.log('Connected to MongoDB')})
mongoose.connection.on('error', (err)=>{console.log(`${err.message}`)})
