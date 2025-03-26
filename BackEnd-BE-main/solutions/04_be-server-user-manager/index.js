import express from "express";

const app = express();

app.use(express.json());

// In-memory user database
const users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "I find myself in tolerable health and spirits.",
  },
];

// Return all users
app.get("/user", (_, res) => {
  res.json(users);
});

// Return a single user basd on id
app.get("/user/:id", (req, res) => {
  res.json(users[req.params.id - 1] || null);
});

// Create a new user
app.post("/user", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    status: req.body.status,
  };
  users.push(user);
  res.json(user);
});

// Update the status of a user
app.patch("/user/:id", (req, res) => {
  const status = req.body.status;
  users[req.params.id - 1].status = status;
  res.json(users[req.params.id - 1]);
});

// Start listening on port 5000
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
