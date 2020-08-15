const { body, param, header, query } = require('express-validator');

export const list = [
  query('categoryId')
    .exists()
    .withMessage('CategoryId is missing from the query')
    .isUUID()
    .withMessage('CategoryId should be a uuid'),
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
