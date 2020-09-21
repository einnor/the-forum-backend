const { body, param, header, query } = require('express-validator');

export const signUp = [
  body('user.firstName')
    .exists()
    .withMessage('First name is missing from the body')
    .isString()
    .withMessage('First name should be a string'),
  body('user.lastName')
    .exists()
    .withMessage('First name is missing from the body')
    .isString()
    .withMessage('Last name should be a string'),
  body('user.email')
    .exists()
    .withMessage('Email is missing from the body')
    .isEmail()
    .withMessage('Email is invalid'),
  body('user.password')
    .exists()
    .withMessage('Password is missing from the body')
    .isLength({ min: 8 })
    .withMessage('Password should have a minum length of 8')
    .matches(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
    )
    .withMessage(
      'Password should containt at least one lowercase character, one upercase character and one special character',
    ),
];

export const signIn = [
  body('user.email')
    .exists()
    .withMessage('Email is missing from the body')
    .isEmail()
    .withMessage('Email is invalid'),
  body('user.password')
    .exists()
    .withMessage('Password is missing from the body')
    .isLength({ min: 8 })
    .isLength({ min: 8 })
    .withMessage('Password should have a minum length of 8')
    .matches(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
    )
    .withMessage(
      'Password should containt at least one lowercase character, one upercase character and one special character',
    ),
];

export const list = [
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

export const getUserById = [
  param('id')
    .exists()
    .withMessage('ID is missing from params')
    .isUUID()
    .withMessage('ID should be a uuid'),
];

export const getMe = [];
