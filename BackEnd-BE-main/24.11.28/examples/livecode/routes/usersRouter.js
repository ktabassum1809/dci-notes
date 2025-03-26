import { Router } from "express";
import { getAllUsers,addUser,getSingleUser,login,deleteSingleUser } from '../controllers/usersController.js';
const usersRouter=Router()


usersRouter.get('/',getAllUsers)
usersRouter.post('/register',addUser)

usersRouter.route('/:id')
.get(getSingleUser)
.post(login)
.delete(deleteSingleUser)

export default usersRouter