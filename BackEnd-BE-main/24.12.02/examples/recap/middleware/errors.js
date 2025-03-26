export const notFound = (req, res) => {
  res.status(404);
  res.send('sorry path not found');

  //res.status(404).send('sorry path not found')
};

export const errorHandler = (err, req, res, next) => {
  res.send({ status: err.status, message: err.message });
};
