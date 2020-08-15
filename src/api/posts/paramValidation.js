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

export const getPostById = [
  param('id')
    .exists()
    .withMessage('ID is missing from params')
    .isUUID()
    .withMessage('ID should be a uuid'),
];

export const create = [
  body('categoryId')
    .exists()
    .withMessage('CategoryId is missing from the body')
    .isUUID()
    .withMessage('CategoryId should be a uuid'),
  body('title')
    .exists()
    .withMessage('Title is missing from the body')
    .isString()
    .withMessage('Title should be a string'),
  body('content')
    .exists()
    .withMessage('Content is missing from the body')
    .isString()
    .withMessage('Content should be a string'),
];
