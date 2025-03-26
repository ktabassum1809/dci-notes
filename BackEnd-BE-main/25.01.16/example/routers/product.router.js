import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/products.controller.js';
import { protect } from '../middlewares/auth.js';

const productRouter = Router();

productRouter.route('/')
.get(protect,getProducts)
.post(protect,addProduct);

export default productRouter;



























/* import { protect } from '../middlewares/auth.js';
const productRouter = Router();


productRouter
  .route("/")
  .get(protect, getProducts)
  .post(protect, addProduct);

export default productRouter; */
