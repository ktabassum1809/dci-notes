import cors from "cors";
import express from "express";
import { connectToDB } from "./libs/db.js";

await connectToDB();

const app = express();
const port = 3001;

// Middleware
app.use(cors());

// Routes
app.post(
  "/uploadImage",
  upload.single("image"), // must match the form "name"
  async (req, res) => {
    try {
      if (req.file) {
        console.log(req.file.path);
        console.log(req.file.filename);
        res.json(req.file);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
