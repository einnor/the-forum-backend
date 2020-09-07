const { body, param, header, query } = require('express-validator');

export const list = [
  query('postId')
    .exists()
    .withMessage('PostId is missing from the query')
    .isUUID()
    .withMessage('PostId should be a uuid'),
];

export const create = [
  body('comment.postId')
    .exists()
    .withMessage('PostId is missing from the body')
    .isUUID()
    .withMessage('PostId should be a uuid'),
  body('comment.userId')
    .exists()
    .withMessage('UserId is missing from the body')
    .isUUID()
    .withMessage('UserId should be a uuid'),
  body('comment.content')
    .exists()
    .withMessage('Content is missing from the body')
    .isString()
    .withMessage('Content should be a string'),
];
