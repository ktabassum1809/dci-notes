/**
 * Author's note
 *
 * Students reading this code will notice a lot of repetition
 *
 * Use of repetitive code like this can be useful in class
 * to demonstrate a common problem - and solve it later in the module
 * through the use of middleware
 */

import express from "express";

const app = express();

const cars = [
  { id: 1, name: "Volvo" },
  { id: 2, name: "BMW" },
  { id: 3, name: "Audi" },
];

app.use(express.json());

app.get("/cars/all", (_, res) => {
  res.json(cars);
});

app.get("/cars/byId/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = Number(id);

  if (isNaN(parsedId)) {
    return res.status(400).send("Invalid id");
  }

  const car = cars.find((object) => {
    return object.id === parsedId;
  });

  if (!car) {
    return res.status(404).send("Id not found");
  }

  res.json(car);
});

app.post("/cars/create", (req, res) => {
  const { id, name } = req.body;

  cars.push({ id, name });

  res.json({ id, name });
});

app.patch("/cars/update/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const parsedId = Number(id);

  if (isNaN(parsedId)) {
    return res.status(400).send("Invalid id");
  }

  const carIndex = cars.findIndex((object) => {
    return object.id === parsedId;
  });

  if (carIndex === -1) {
    return res.status(404).send("Id not found");
  }

  cars[carIndex] = {
    id: body.id,
    name: body.name,
  };

  res.json({
    id: body.id,
    name: body.name,
  });
});

app.delete("/cars/delete/:id", (req, res) => {
  const { id } = req.params;

  const parsedId = Number(id);

  if (isNaN(parsedId)) {
    return res.status(400).send("Invalid id");
  }

  const carIndex = cars.findIndex((object) => {
    return object.id === parsedId;
  });

  if (carIndex === -1) {
    return res.status(404).send("Id not found");
  }

  cars.splice(carIndex, 1);

  res.json(cars);
});

app.listen(3000, () => {
  console.log("The server is listening");
});
