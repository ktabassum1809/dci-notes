import express from "express";
import { addArticle, getArticles } from "../controllers/articleControllers.js";

const router = express.Router();

router.route("/").post(addArticle).get(getArticles);

export default router;
