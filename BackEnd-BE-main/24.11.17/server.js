import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//middlwares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB connected and Server running on port: ", PORT);
    });
  })
  .catch((err) => {
    console.log("DB connection failed", err);
  });
