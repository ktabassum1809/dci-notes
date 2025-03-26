import express from 'express'
import productRouter from './routes/productRouter.js'
import userRouter from './routes/userRouter.js'
const app=express()

app.use(express.json())

/* app.get('/products',price,productController)
app.get('/products/:id',price,productController)
app.post('/products/add',price,productController)
app.patch('/products/:id',price,productController)
app.delete('/products/:id',price,productController) */


app.use('/products',productRouter)
app.use('/users',userRouter)


app.listen(3000,()=>console.log(`server is running on 3000`))