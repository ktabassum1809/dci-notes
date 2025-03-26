import express from "express";
import {
  createUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

//http://localhost:5000/user/profile
router.get("/profile/:id", getUser);

//http://localhost:5000/user/getusers
router.get("/getusers", getUsers);

//http://localhost:5000/user/signup
router.post("/signup", createUser);

export default router;
