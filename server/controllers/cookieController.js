const cookieController = {};
const User = require('../models/userModel');

cookieController.setCookie = (req, res, next) => {

  return next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  const username = res.locals.google ? res.locals.id : req.body.username;
  User.findOne({ username })
    .then(results => {
      res.cookie('ssid', results.id, { httpOnly: true });
      return next();
    })
    .catch(err => next({log: 'ssidcookie', message: {err: 'error in ssid'}}));
};

module.exports = cookieController;