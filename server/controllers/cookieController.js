const cookieController = {};
const User = require('../models/userModel');

cookieController.setCookie = (req, res, next) => {

  return next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  const { username } = req.body;
  User.findOne({ username: username })
    .then(results => {
      res.cookie('ssid', results.id, { httpOnly: true });
      next();
    })
    .catch(err => next(err));
};

module.exports = cookieController;