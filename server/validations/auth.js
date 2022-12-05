import { body } from 'express-validator';

export const registerValidator = [
  body('email', 'Email format is incorrect!').isEmail(),
  body('password', 'The password must be at least 5 characters long!').isLength({ min: 5 }),
  body('fullName', 'Enter your name!').isLength({ min: 3 }),
  body('avatarUrl', 'The avatar link is incorrect!').optional().isURL(),
];
