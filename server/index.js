import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import checkAuth from './utils/checkAuth.js';
import { registerValidator, loginValidator, postCreateValidation } from './validations.js';

import { register, login, getMe } from './controllers/UserController.js';
import { addPost } from './controllers/PostController.js';

//.env config
dotenv.config({ debug: true });
//DB Connect
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());

//Routes
//Auth
app.post('/auth/login', loginValidator, login);
app.post('/auth/register', registerValidator, register);
app.get('/auth/me', checkAuth, getMe);
//Posts
app.post('/posts', checkAuth, addPost);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server is running!');
});
