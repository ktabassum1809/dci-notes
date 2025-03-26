import fs from 'fs';

export const generateDate = (req, res, next) => {
  /* console.log('generateDate is triggered') */
  /*  console.log(`${new Date()}`); */
  req.body.date = new Date();
  console.log(req.body);
  next();
};

export const logDate = (req, res, next) => {
  console.log(req.body.date);
  /* console.log("logDate is triggered") */
  fs.writeFileSync('dateLog.txt', JSON.stringify(req.body.date));
  next();
};


