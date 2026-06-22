const { body } = require('express-validator');

const registerValidator = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  body('name').trim().notEmpty(),
];

const loginValidator = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
];

module.exports = { registerValidator, loginValidator };
