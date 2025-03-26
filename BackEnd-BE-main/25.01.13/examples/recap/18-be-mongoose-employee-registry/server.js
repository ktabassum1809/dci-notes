import express from 'express'
import mongoose from "mongoose";
import { seedRouter } from './routes/seedRouter.js';
import { employeeRouter } from './routes/employeRouter.js';
import { roleRouter } from './routes/roleRouter.js';
import { officeRouter } from './routes/officeRouter.js';






const app=express()





app.use('/seed',seedRouter)
app.use('/employee',employeeRouter)
app.use('/role',roleRouter)
app.use('/office',officeRouter)














app.listen(3000,()=>{console.log('Listening to port 3000')})




mongoose.connect('');
mongoose.connection
  .on('error', console.error)
  .on('open', () =>
    console.log(`Conntected to MongoDB / ${mongoose.connection.name}`)
  );
