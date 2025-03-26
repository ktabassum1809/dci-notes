import { User } from '../models/users.model.js';
import { verifyToken } from '../utils/jwt.js';

/* ----------- verify the jwt-token ----------- */
export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      const error = new Error('sorry, you need to log in first');
      error.status = '401';
      throw error;
    }

    const decoded_token = await verifyToken(token);

    const user = await User.findById(decoded_token.id);
    console.log(user);
    if (!user) {
      const error = new Error(
        'The user belongs to given token is deleted recently!'
      );
      throw error;
    }



    req.token = decoded_token;

    next();
  } catch (error) {
    next(error);
  }
};
