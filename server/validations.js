import { body } from 'express-validator';

export const loginValidator = [
  body('email', 'Email format is incorrect!').isEmail(),
  body('password', 'The password must be at least 5 characters long!').isLength({ min: 5 }),
];

export const registerValidator = [
  body('email', 'Email format is incorrect!').isEmail(),
  body('password', 'The password must be at least 5 characters long!').isLength({ min: 5 }),
  body('fullName', 'Enter your name!').isLength({ min: 3 }),
  body('avatarUrl', 'The avatar link is incorrect!').optional().isURL(),
];

export const postCreateValidator = [
  body('title', 'Enter a post title').isLength({ min: 3 }).isString(),
  body('text', 'Enter a post text').isLength({ min: 10 }).isString(),
  body('tags', 'Invalid tag format').optional().isString(),
  body('imageUrl', 'Invalid image link').optional().isString(),
];