import { verifyToken } from './jwt.js';

export const protect = async (req, res, next) => {
  try {
    // const token=req.headers.authorization.split(' ')[1]
    const token = req.cookies.access_token;

    if (!token) {
      const error = new Error();
      error.status = '401';
      throw error;
    }

    const decoded_token = await verifyToken(token);
    console.log(decoded_token);
    req.token = decoded_token;
    next();
  } catch (error) {
    next(error);
  }
};

export const restrictTo = (...allowedRoles) => {
  return async (req, res, next) => {
    try {

        console.log(req.token)
      if (!allowedRoles.includes(req.token.role)) {
        const error = new Error(`you don't have permission to do this!`);
        throw error;
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
