import express from "express";
import {
  createPost,
  deletePost,
  getOnePost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

import auth from "../middleware/auth.js";

const router = express.Router();
//http://localhost:5000/posts/

router.get("/", getPosts);
router.post("/", createPost);

router.get("/:id", auth, getOnePost);

//http://localhost:5000/posts/391820398
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
