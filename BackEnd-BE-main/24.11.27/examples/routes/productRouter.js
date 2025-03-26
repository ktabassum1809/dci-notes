import {Router} from 'express'
import { getAllProducts,getSingleProduct,addProduct,updateProduct,deleteProduct} from '../controllers/productController.js'
import {price} from '../middlewares/productMiddleware.js'






const productRouter=Router()

/* 
app.get('/products',price,productController)
app.get('/products/:id',price,productController)
app.post('/products/add',price,productController)
app.patch('/products/:id',price,productController)
app.delete('/products/:id',price,productController) 
*/


//   /products




/* productRouter.get('/',
(req,res,next)=>{
console.log('this is the price middleware')
next()
},
(req, res) => {
  res.send(data);
}
) */


productRouter.get('/',price,getAllProducts)
productRouter.post('/add',price,addProduct)


/* 
productRouter.get('/:id',price,getSingleProduct)
productRouter.patch('/:id',price,updateProduct)
productRouter.delete('/:id',price,deleteProduct)   
*/


productRouter.route('/:id')
.get(price,getSingleProduct)
.patch(price,updateProduct)
.delete(price,updateProduct)

export default productRouter