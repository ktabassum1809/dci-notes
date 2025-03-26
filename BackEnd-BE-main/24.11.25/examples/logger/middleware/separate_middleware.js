export const thirdMiddleware = (req, res, next) => {
    console.log(`this is our third middleware`);
    next();
  };



