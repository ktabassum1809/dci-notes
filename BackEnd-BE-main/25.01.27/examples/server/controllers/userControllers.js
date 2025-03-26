import User from '../models/User.js';
import createError from 'http-errors';

export const getUsers = async (req, res, next) => {
  try {
    console.log(req.query);
    const users = await User.find(req.query);
    if (users.length > 0) res.status(200).json(users);
    else throw createError('no users found');
  /*    else throw createError(404,'no users found'); 
     else
      throw createError.NotFound('no users found'); */
  } catch (e) {
    next(e);
  }
};

export const getUser = async (req, res, next) => {
  try {
 
    const { id } = req.params;
    console.log(req.params);

    const user = await User.findById(id);

    if (user) res.status(200).json(user);
    else throw createError.NotFound('no users found');
  } catch (e) {
    next(e);
  }
};
