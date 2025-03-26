import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.path}`);
  next();
});

const reports = [
  { lat: 51.4950938502495, lng: -0.09819030761718751, desc: "Bike here" },
  { desc: "Gotcha! You've been hacked!" },
];

app.get("/reports", (req, res) => {
  console.log("Sending", reports);
  res.json(reports);
});

app.post("/reports", (req, res) => {
  console.log("Received", req.body);
  reports.push(req.body);

  res.status(201);
  res.json({ success: true });
});

app.use((req, res) => {
  res.status(404);
  res.send("I don't have what you seek");
});

app.listen(9210, () => {
  console.info(`App listening on http://127.0.0.1:9210`);
});
