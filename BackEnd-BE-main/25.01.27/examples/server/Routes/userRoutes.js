import { Router } from 'express';
import {
  getUsers,
  getUser,
} from '../controllers/userControllers.js';
import { signup } from '../controllers/authController.js';

const userRouter = Router();

userRouter.route('/').get( getUsers);

userRouter.post('/signup', signup);
userRouter.route('/:id').get(getUser);

export default userRouter; 
