import { User } from '../models/userModel.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      const err = new Error('No user found!');
      err.status = 204;
      throw err;
    }
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  
  try {
    const user = await User.find({_id:req.params.id});
    if (!user) {
      const err = new Error('No user found!');
      err.status = 204;
      throw err;
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  console.log(req.body.email)
  try {
    const user = await User.findOne({email:req.body.email});
    if (!user) {
      const err = new Error('No user found!');
      err.status = 204;
      throw err;
    }
    res.status(200).json({ user , message:"Thanks for coming back"});
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    if (!req.body.email || !req.body.password) {
      const err = new Error('please fill all fiealds in');
      err.status = 400;
      throw err;
    }
    res.status(200).json({ newUser, message: 'user added' });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      const err = new Error('wrong ID ');
      err.status = 400;
      throw err;
    }
    res.status(200).json({ user, message: 'user deleted' });
  } catch (error) {
    next(error);
  }
};

