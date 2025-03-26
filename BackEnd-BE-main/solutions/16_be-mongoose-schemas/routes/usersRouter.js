import express from "express";
import { addUser, getUsers } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").post(addUser).get(getUsers);

export default router;
