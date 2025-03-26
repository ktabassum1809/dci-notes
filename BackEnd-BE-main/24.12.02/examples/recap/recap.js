import express from 'express';
import { notFound, errorHandler } from './middleware/errors.js';

const app = express();
app.use(express.json())

app.get('/users', (req, res) => {
  res.send('this is the users page');
});
app.post('/users/add', (req, res) => {
  res.send('user registered');
});
app.post('/users/login', (req, res, next) => {

  const { password, email } = req.body;
  console.log(req.body)

  if (!email || !password) {
    const error = new Error('sorry credentials missing');
    error.status = 400;
    return next(error);
  }

  res.send('user logged in');
});

app.use(notFound);
app.use(errorHandler);

app.listen(5001, () => `server is running on port 5001`);
