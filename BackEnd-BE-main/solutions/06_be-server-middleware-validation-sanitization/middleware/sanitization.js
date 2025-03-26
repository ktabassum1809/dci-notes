export function sanitizeName(req, res, next) {
  console.log(`We are validating the object we received`);
  const { firstName, lastName } = req.body;

  // Note: firstName and lastName is not validated to exist on the body
  // This might throw an error and if it does, that error is caught by
  // the global error handler in server.js
  req.body.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  req.body.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  next();
}

export function stringsToNumbers(req, res, next) {
  req.body.age = parseInt(req.body.age);
  req.body.fbw = parseInt(req.body.fbw);

  next();
}
