import express from "express";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    description: "This is product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.99,
    description: "This is product 3",
  },
];

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET a single product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products[Number(id) - 1];
  res.json(product);
});

export default router;
