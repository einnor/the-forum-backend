const { body, param, header, query } = require('express-validator');

export const list = [
  query('order')
    .optional()
    .isString()
    .isIn(['asc', 'desc'])
    .withMessage('Order is either invalid or not specified'),
  query('limit')
    .optional()
    .isInt()
    .toInt()
    .withMessage('Limit is either invalid or not specified'),
  query('offset')
    .optional()
    .isInt()
    .toInt()
    .withMessage('Offset is either invalid or not specified'),
];
