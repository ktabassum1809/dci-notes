import express from "express";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bobi Johnson", email: "johnson@example.com" },
];

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  res.json(users);
});

// GET a single product by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users[Number(id) - 1];
  res.json(user);
});

export default router;
