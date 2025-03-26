import { User } from '../models/users.model.js';
import { verifyToken } from '../utils/jwt.js';

/* ----------- verify the jwt-token ----------- */
export const protect = async (req, res, next) => {
  try {
    //const token = req.headers.authorization?.split(' ')[1];
   console.log('hey')
 const token=req.cookies.access_token
 
    if (!token) {
      const error = new Error('sorry, you need to log in first');
      error.status = '401';
      throw error;
    }

    const decoded_token = await verifyToken(token);

    req.token = decoded_token;
    //console.log(req.token);
    next();
  } catch (error) {
    next(error);
  }
};
export const restrictTo = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      console.log(req.token);
      if (!allowedRoles.includes(req.token.role)) {
        const error = new Error(" You don't have the right permission");
        error.status = 403;
        throw error;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
