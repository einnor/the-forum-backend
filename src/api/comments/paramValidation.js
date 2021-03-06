const { body, param, header, query } = require('express-validator');

export const list = [
  query('postId')
    .exists()
    .withMessage('PostId is missing from the query')
    .isUUID()
    .withMessage('PostId should be a uuid'),
];

export const getCommentById = [
  param('id')
    .exists()
    .withMessage('ID is missing from params')
    .isUUID()
    .withMessage('ID should be a uuid'),
];

export const create = [
  body('comment.postId')
    .exists()
    .withMessage('PostId is missing from the body')
    .isUUID()
    .withMessage('PostId should be a uuid'),
  body('comment.content')
    .exists()
    .withMessage('Content is missing from the body')
    .isString()
    .withMessage('Content should be a string'),
];

export const deleteCommentById = [
  param('id')
    .exists()
    .withMessage('ID is missing from params')
    .isUUID()
    .withMessage('ID should be a uuid'),
];
