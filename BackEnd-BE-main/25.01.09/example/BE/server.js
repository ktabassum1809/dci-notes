import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { User } from './models/userModel.js';
import { Post } from './models/postModel.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/user', async (req, res, next) => {
  try {
    
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

// to post something
app.post('/post', async (req, res, next) => {
  try {
    console.log(req.method)
    const newPost = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
      hearts: req.body.hearts,
      author: req.body.author,
    });

    res.json(newPost);
  } catch (error) {
    next(error);
  }
});
app.get('/user', async (req, res, next) => {
  try {
    const users = await User.find().populate('posts').exec();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// get list of posts
app.get('/post', async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate('author', ['email', 'fullname'])
      .exec();

    res.json(posts);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.status || 500)
      .json({ status: 'faild', message: err.message });
  }
});

const port = 8000;
app.listen(port, console.log(`server is up on port: ${port} 🚀`));

// db con
mongoose.connect('mongodb+srv://balazsvago:haha@cluster0.hwhmo.mongodb.net/');
mongoose.connection.on('connected', () => {
  console.log('connection established! 😀');
});
mongoose.connection.on('error', (err) =>
  console.log('db con err:', err.message)
);
