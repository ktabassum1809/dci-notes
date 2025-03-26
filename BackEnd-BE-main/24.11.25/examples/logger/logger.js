import express from 'express';
import {
  generateDate,
  logDate
} from './middleware/logging_middlewares.js';
import { thirdMiddleware } from './middleware/separate_middleware.js';

const app = express();
app.use(express.json());

const port = 8000;

//we need an endpoint that logs the date and saves it in a txt file
//we need a route ("/date/add") , "POST METHOD"
//we need a middleware to generate the date
//we need a middleware to save the date into the txt file
//we need to send a response

app.post('/date/add', generateDate, logDate, thirdMiddleware, (req, res) => {
  res.send('the Date has been saved!!!');
});

app.listen(port, () => console.log(`server is running on ${port}`));
