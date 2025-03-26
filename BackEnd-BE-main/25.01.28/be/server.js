import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorHandler, notFound } from './middlewares/error.js'
import { userRouter } from './Routes/userRouter.js'

import cors from 'cors'
import { recordRouter } from './Routes/recordRouter.js'
const app=express()


dotenv.config()
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())


app.use('/users',userRouter)
app.use('/records',recordRouter)
app.use(notFound)
app.use(errorHandler)

mongoose.connect(process.env.DB_URI)
mongoose.connection
  .on('error', console.error)
  .on('open', () =>
    console.log(`Conntected to MongoDB `)
  );

app.listen('3000', ()=>console.log('server is running on port 3000'))