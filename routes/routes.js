const routes = require('express').Router();
const {
  addUser,
  login,
  getAllUsers,
  getUserById,
} = require('../controllers/userController');
const { addCategory, getAllCetegories } = require('../controllers/categoryController');
const { addPost, getAllPosts } = require('../controllers/blogPostController');
const {
  validateName,
  validateEmail,
  validatePassword,
} = require('../middlewares/User');
const auth = require('../middlewares/valid');
const { validatePost } = require('../middlewares/BlogPost');

routes.post('/user', validateName, validateEmail, validatePassword, addUser);
routes.get('/user', auth, getAllUsers);
routes.get('/user/:id', auth, getUserById);

routes.post('/login', validateEmail, validatePassword, login);

routes.post('/categories', auth, addCategory);
routes.get('/categories', auth, getAllCetegories);

routes.post('/post', auth, validatePost, addPost);
routes.get('/post', auth, getAllPosts);

module.exports = routes;
