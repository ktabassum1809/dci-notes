import express from "express";
import { readFile } from "./libs/fs.js";
import { register } from "./libs/db.js";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.redirect("/register");
});

app.get("/register", (req, res) => {
  res.send(readFile("index.html"));
});

app.post("/register", async (req, res) => {
  let html = readFile("index.html");

  try {
    const result = await register(req.body);

    if (result.error) {
      console.log("Error during registration", error);
      html = html.replace("{{status}}", "error");
      html = html.replace("{{message}}", result.error);
      res.status(500).send(html);
      return;
    }

    html = html.replace("{{status}}", "success");
    html = html.replace("{{message}}", "Registration successful!");
    res.send(html);
  } catch (error) {
    console.log("CAUGHT ERROR", error);
    html = html.replace("{{status}}", "error");
    html = html.replace("{{message}}", error.error.message);
    res.status(500).send(html);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
