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

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    User.findOne({ username: username })
      .then((results) => {
        if (results) {
          results.comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
              //REDIRECT TO SIGNUP PAGE
              res.redirect('/');
            } else return next();
          })
        }
      })
  } else {
    return next('invalid input');
  }
};

module.exports = userController;