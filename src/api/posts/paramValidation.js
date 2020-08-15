const { body, param, header, query } = require('express-validator');

export const list = [
  query('category')
    .exists()
    .withMessage('Category is missing from the query')
    .isString()
    .withMessage('Category should be a string'),
  query('order')
    .optional()
    .isString()
    .isIn(['asc', 'desc'])
    .withMessage('Order should be either asc or desc')
    .toInt(),
  query('perPage')
    .optional()
    .isInt()
    .withMessage('perPage should be an integer')
    .toInt(),
  query('page')
    .optional()
    .isInt()
    .withMessage('Page should be an integer')
    .toInt(),
];
