import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;
import cors from 'cors';

app.use(express.json());
app.use(cors());

//RECAP

app.get('/', (req, res) => {
  res.send('The server is running');
});


app.get('/hello', (req, res) => {
  res.send('hello ');
});


// POST REQUEST

app.post('/user', (req, res) => {
  console.log(req.body);

  res.send(`Counter: ${JSON.stringify(req.body)}`);
});


//COUNTER

let counter=0


app.post('/counter', (req, res) => {
  console.log(`req.body:  `,req.body);
  counter=req.body.count
  console.log(counter)
  res.send(`Counter: ${JSON.stringify(req.body)}`);
});




app.get('/counter', (req, res) => {
  console.log(req.body);
  res.send(`Counter: ${JSON.stringify(counter)}`);
});



app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
