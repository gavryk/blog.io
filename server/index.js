import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import multer from 'multer';
import { registerValidator, loginValidator, postCreateValidator } from './validations.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';

import { getMe, login, register } from './controllers/UserController.js';
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from './controllers/PostController.js';

//.env config
dotenv.config({ debug: true });
//DB Connect
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.replace(' ', '_'));
  },
});
const upload = multer({ storage });

//Routes
//Auth
app.post('/auth/login', loginValidator, handleValidationErrors, login);
app.post('/auth/register', registerValidator, handleValidationErrors, register);
app.get('/auth/me', checkAuth, getMe);

//Posts
app.get('/posts', getPosts);
app.get('/posts/:id', getPost);
app.post('/posts', checkAuth, postCreateValidator, handleValidationErrors, addPost);
app.patch('/posts/:id', checkAuth, handleValidationErrors, updatePost);
app.delete('/posts/:id', checkAuth, deletePost);

//Upload Route
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server is running!');
});