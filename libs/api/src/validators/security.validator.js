const { body, param } = require('express-validator');

const idValidator = [
  param('id').isUUID().withMessage('Invalid ID format'),
];

module.exports = { idValidator };
