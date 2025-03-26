import express from 'express';
import { data } from './data.js';

const app = express();

// middleware to parse enclosed data
app.use(express.json());

const port = process.env.PORT || 5001;
// routes
// get all products - /product
app.get('/product', (req, res) => {
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send('There are no products!');
  }
});

//get a single product based on ID

app.get('/product/:id', (req, res) => {
  /*   console.log(req.params); */
  const productID = req.params.id;
  //const {id}=req.params
  //const productFound=data.find(product=>req.params.id==product.id)
  const productFound = data.find((product) => productID == product.id);
  res.json(productFound);
});

// add new product - /product/add
app.post('/product/add', (req, res) => {
  const new_product = req.body;

  data.push(new_product);
  res.json(data);
});

// update and replace a product based on ID

app.put('/product/:id', (req, res) => {
  const productID = req.params.id;
  const updated_product = req.body;
  console.log(req.body);
  //check if the product exists

  const new_array_of_products = data.map((product) => {
    if (productID == product.id) {
      //replace the existing product with the new one

      product = updated_product;
    }
    return product;
  });

  res.json(new_array_of_products);
});

// update a product based on ID

app.patch('/product/:id', (req, res) => {
  const productID = req.params.id;
  const newValue = req.body;

  //check if the product exists

  const new_array_of_products = data.map((product) => {
    if (productID == product.id) {
      //replace the existing product with the new one

      product = { ...product, ...newValue };
    }
    return product;
  });

  res.json(new_array_of_products);
});

// delete a product based on ID

app.delete('/product/:id', (req, res) => {
  const productID = req.params.id;
  console.log(productID)
  const updated_array_of_products = data.filter((product) => productID != product.id);

  res.json(updated_array_of_products);
});

app.listen(port, console.log(`Server up and running on port: ${port} 🚀`));
