import { check, validationResult } from 'express-validator';

const validateInput = [
  check('firstName')
    .notEmpty()
    .withMessage(`First Name is required, field can't be empty`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`Name must be between 3 and 15 characters`),
  check('lastName')
    .notEmpty()
    .withMessage(`Last Name is required, field can't be empty`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`Name must be between 3 and 15 characters`),
  check('email')
    .notEmpty()
    .withMessage('Sorry, need to fill this field in')
    .trim()
    .isEmail()
    .withMessage('sorry, thats not a valid Email'),
  check('age')
    .notEmpty()
    .withMessage('Age is Required')
    .isInt({ min: 18 })
    .withMessage('Age must be at least 18 years'),

  check('password')
    .notEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'i')
    .withMessage('Sorry, you need to add special characters'),

  check('passwordConfirm')
    .notEmpty()
    .withMessage('Password Confirm is Required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .custom((value, { req }) => {
      if (value == req.body.password) {
        return true;
      }
      throw new Error('Password do not match');
    }),
  (req, res, next) => {
    const results = validationResult(req);
    
    results.isEmpty() ? next() : res.status(400).send(results.errors);
  },
];

export default validateInput;
