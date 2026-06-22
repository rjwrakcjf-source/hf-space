const { body } = require('express-validator');

const buildValidator = [
  body('name').trim().notEmpty(),
  body('type').isIn(['web', 'server', 'desktop']),
];

module.exports = { buildValidator };
