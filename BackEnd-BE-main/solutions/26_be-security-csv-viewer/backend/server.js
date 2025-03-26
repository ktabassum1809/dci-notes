import express from "express";
import csv from "csvtojson";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

// Add multer for file uploads
const upload = multer({ dest: "uploads/" });

app.post("/convert", upload.single("file"), (req, res) => {
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      console.log(jsonObj);
      res.send(jsonObj);
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
});

const port = 3090;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
