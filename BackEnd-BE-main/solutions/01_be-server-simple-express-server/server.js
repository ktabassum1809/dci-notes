import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

// Task 3 - Add middleware for a GET request to '/hello'
app.get("/hello", (request, response) => {
  response.send("Hello to you too!");
});

// Task 4 - Add middleware for a GET request to '/time'
app.get("/time", (request, response) => {
  const date = new Date();
  const time = date.toISOString();
  response.send(time);
});

// Task 5 - Add middleware for a GET request to '/random'
app.get("/random", (request, response) => {
  const random = Math.floor(Math.random() * 100);
  response.send(`Random Number: ${random}`);
});

// Task 6 - Add middleware for a GET request to '/isNumber'
app.get("/fact", (request, response) => {
  response.send("JavaScript was created in about 10 days!");
});

export { server };
