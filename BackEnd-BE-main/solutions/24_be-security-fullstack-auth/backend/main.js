import express from "express";

const app = express();
const super_secret = "711e7569725a4db5ba86ed0d46cdf771";

// TODO

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
