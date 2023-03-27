const User = require('../models/userModel');
const qs = require('qs');
const jwt = require('jsonwebtoken');

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password, birthday } = req.body;
  if (res.locals.google) {
    const { id, name, birthday } = res.locals;

    User.exists({ username: id })
      .then(results => {
        if (results) return next();
        else {
          const birthdayFormatted = `${birthday.year}-${birthday.month}-${birthday.day}`
          User.create({ username: id, name, birthday: birthdayFormatted })
            .then(() => {
              return next();
            })
            .catch((err) => {
              return next({log: 'createUser', message: {err: 'error here'}});
            });
        }
      })
  }

  else if (username && password && birthday) {
    console.log('line 32')
    User.create({ username, password, name: username, birthday })
      .then(() => next())
      .catch((err) => {
        return next({log: 'createUser', message: {err: 'error here', err}});
      });
  } else {
    return next({log: 'createUser', message: {err: 'error here', err}});
  }
};

userController.verifyUser = (req, res, next) => {
  console.log('verify user')
  const { username, password } = req.body;
  console.log(username, password)
  if (username && password) {
    User.findOne({ username })
      .then((results) => {
        if (results) {
          results.comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
              //REDIRECT TO SIGNUP PAGE
              res.redirect('http://localhost:8080/');
            } else return next();
          })
        }
      })
  } else {
    return next('invalid input');
  }
};

userController.google = (req, res, next) => {

  const { code } = req.query;

  const data = {
    code,
    client_id: process.env.googleClientId,
    client_secret: process.env.googleClientSecret,
    redirect_uri: process.env.googleOAuthRedirectUrl,
    grant_type: 'authorization_code',
  }

  fetch('https://oauth2.googleapis.com/token', {
    method: "POST", 
    headers: {
      // "Content-Type": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      const { access_token, id_token } = response;

      fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${id_token}`
        }
      })
        .then(response => response.json())
        .then(response => {
          res.locals.id = response.sub;
          res.locals.name = response.name;
          // res.locals.email = response.email;
        })
        .catch(err => next({log: 'google', message: {err: 'error here'}}))

      fetch('https://people.googleapis.com/v1/people/me?personFields=birthdays', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
        .then(response => response.json())
        .then(response => {
          res.locals.birthday = response.birthdays[0].date;
          res.locals.google = true;
        })
        .then(() => next())
        .catch(err => next({log: 'google', message: {err: 'error here'}}))
      })
    .catch(err => next({log: 'google', message: {err: 'error here'}}))
}

module.exports = userController;