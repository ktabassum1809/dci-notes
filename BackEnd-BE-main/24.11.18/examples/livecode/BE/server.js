import express from 'express';
import {data} from './data.js'
import cors from 'cors'

// Initialize our server
const app = express();
const PORT = process.env.PORT || '5001';

app.use(cors())
// This function that will process ALL incoming requests
/* app.use((req, res) => {
  res.send("Now it's an arrow function");
}); */

app.get('/', (req, res) => {
  res.send('This is the home route of our backend');
});

app.get('/records', (req, res) => {
  //res.send('This is the records page');
  res.send(data);
});
app.get('/port', (req, res) => {
  res.send(PORT);
});

//app.listen(PORT)
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
