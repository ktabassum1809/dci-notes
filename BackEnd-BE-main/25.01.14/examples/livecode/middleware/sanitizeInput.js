
import { check, validationResult } from "express-validator";


export const sanitizeInput=[
check('firstName').trim().escape()

.customSanitizer((value)=>value.toUpperCase()),
check("lastName").trim().escape(),
check("age").trim().escape(),
check("email").trim().escape().normalizeEmail({ gmail_remove_dots: true,all_lowercase: true }),
check("password").trim().escape(),
check("passwordConfirm").trim().escape(),

(req, res, next) => {
  const result = validationResult(req);

  result.isEmpty()
    ? next()
    : res.send({ errors: result });
},

]






export const upperCase = (req, res, next) => {
  req.body.firstName = req.body.firstName.toUpperCase();
  

  next();
};
