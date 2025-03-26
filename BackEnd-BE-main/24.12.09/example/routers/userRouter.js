import { Router } from 'express';
import {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  login,
} from '../controllers/userController.js';
const userRouter = Router();

userRouter.route('/').get(getUsers).post(addUser).post(login);

userRouter.route('/login').post(login);

userRouter.route('/:id').get(getUser).delete(deleteUser);
/* .patch(updateUser)
 */

/* 










userRouter
  .route("/:id")
  .get(getUser)
  .put()
  .delete();


// login route
userRouter.route('/login')
  .post(login)
 */
export default userRouter;
