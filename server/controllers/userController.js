const User = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    User.create({ username: username, password: password })
      .then(() => next())
      .catch((err) => {
        return next('user already created');
      });
  } else {
    return next('invalid input');
  }
  };