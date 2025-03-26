import express from "express";
import { logger } from "./logger.js";

const app = express();
const port = 3001;
const clientUrl = "http://localhost:3001";

app.use(express.json());
app.use("/", logger);

app.get("/travel", (req, res) => {
  res.send("We go travelling!");
});

app.get("/search", (req, res) => {
  res.send("Searching...");
});

app.post("/subscribe", (req, res) => {
  res.send("Subscribed");
});

app.post("/createBooking", (req, res) => {
  res.send("Service booked.");
});

app.patch("/update", (req, res) => {
  res.send("Data updated.");
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
