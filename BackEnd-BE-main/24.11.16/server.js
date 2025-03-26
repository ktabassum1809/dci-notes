import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/postsRoutes.js";

const app = express();
dotenv.config();

//middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//posts middleware
//http://localhost:5000/posts
app.use("/posts", postRoutes);

//port
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Connected to DB and Server running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
