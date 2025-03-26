import express from "express";

const blogposts = [
  {
    id: 1,
    title: "A blog post",
    content: "This is the content!.",
  },
  {
    id: 2,
    title: "Another blog post",
    content: "Lorem Ipsum.",
  },
];

const router = express.Router();

// GET all blogposts
router.get("/", (req, res) => {
  res.json(blogposts);
});

// GET a single blogpost by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const blogpost = blogposts[Number(id) - 1];
  res.json(blogpost);
});

export default router;
