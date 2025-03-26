import express, { json } from "express";
import cors from "cors";
import {
  sanitizeResponse,
  validateResponse,
} from "./controllers/userControllers.js";
import { sanitizeName, stringsToNumbers } from "./middleware/sanitization.js";
import { validateKeys, isAdult, isFam } from "./middleware/validation.js";

const app = express();

/* EXPRESS MIDDLEWARE */
app.use(json());
app.use(cors());

/* ROUTES */
app.post("/validateUser", validateKeys, isAdult, isFam, validateResponse);
app.post("/sanitizeUser", sanitizeName, stringsToNumbers, sanitizeResponse);

/* GLOBAL ERROR HANDLING MIDDLEWARE */
app.use(function errorHandler(err, req, res, next) {
  console.error("Error during request processing", err);
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
});

/* Start listening */
const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
