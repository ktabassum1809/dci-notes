import express from "express";
import fs from "node:fs";

const app = express();
const filePath = "sightings.txt";

app.use(express.urlencoded());

app.get("/data", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.send(data);
});

function getDateString() {
  const now = new Date();
  const month = (now.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are 0-based in JavaScript
  const day = now.getUTCDate().toString().padStart(2, "0");
  const date = `${now.getFullYear()}-${month}-${day}`;

  return date;
}

app.post("/data", (req, res) => {
  // prepare data to be written to the file
  const { species } = req.body;
  const date = getDateString();
  const newData = `\n${date},${species}`;

  // read the file and append the new data
  let data = fs.readFileSync(filePath, "utf8");
  data = data + newData;
  fs.writeFileSync(filePath, data);

  res.send("Data received successfully!");
});

const port = 7771;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
