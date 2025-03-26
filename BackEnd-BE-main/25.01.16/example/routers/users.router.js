import {Router} from "express";
import { login, register, updateUser } from "../controllers/users.controller.js";
import { protect } from "../middlewares/auth.js";
protect

const userRouter = Router();

// define routes here
userRouter.route("/register").post(register);
userRouter.route("/login").post(protect, login);
userRouter.route("/update/:id").patch(protect, updateUser);



export default userRouter;



























/* const userRouter = Router();

// define routes here
userRouter.route("/register").post( register);
userRouter.route("/login").post( login);



export default userRouter; */
