const { body, param, header, query } = require('express-validator');

export const signUp = [
  body('firstName')
    .isString()
    .withMessage('First name is either invalid or not specified'),
  body('lastName')
    .isString()
    .withMessage('Last name is either invalid or not specified'),
  body('email')
    .isEmail()
    .withMessage('Email is either invalid or not specified'),
  body('password')
    .isAlphanumeric()
    .isLength({ min: 8 })
    .withMessage('Email is either invalid or not specified'),
];

export const signIn = [
  body('email')
    .isEmail()
    .withMessage('Email is either invalid or not specified'),
  body('password')
    .isAlphanumeric()
    .isLength({ min: 8 })
    .withMessage('Email is either invalid or not specified'),
];
