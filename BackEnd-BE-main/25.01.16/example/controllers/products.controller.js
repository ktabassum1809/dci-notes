import Product from "../models/products.model.js";


/* ----------- get list of porducts ----------- */
export const getProducts = async(req, res, next) => {
  try {
    const products = await Product.find();
    res.send({products});

  } catch (error) {
    next(error);
  }
};



/* -------------- add new product ------------- */
export const addProduct = async (req, res, next) => {
  try {
    
const decoded_token=req.token

    // add product to db
    const {title, price} = req.body;
    const newProduct = await Product.create({title, price});


    // send response
    res.send({ msg: "product added!", newProduct,decoded_token });

  } catch (error) {
    next(error);
  }
};
