export const notFound = (req, res, next) => {
  const err = new Error('Route not defined!');
  err.status = 404;
  next(err);
};
export const errorHandler = (err, req, res, next) => {
  if (err) {
    err.status ||= 500;
    res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
    next();
  }
};
