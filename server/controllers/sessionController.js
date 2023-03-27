const Session = require('../models/sessionModel');
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
    Session.exists({ cookieId: req.cookies.ssid })
        .then(results => {
            if (results && req.cookies.ssid) {
                res.locals.loggedIn = true;
                return next();
            } else {
                res.locals.loggedIn = false;
                return next();
            }
        })
        .catch(err => next({log: 'isLoggedIn', message: {err: 'error here', err}}))
};
  

// create new session if one does not yet exist
sessionController.startSession = (req, res, next) => {
    Session.exists({ cookieId: req.cookies.ssid })
    .then(results => {
        if (results) return next();
        else {
          Session.create({ cookieId: req.cookies.ssid })
          .then(() => next())
          .catch(err => {
            return next({log: 'startsession', message: {err: 'error here', err}});})
        }   
    })
    .catch((err) => {
    return next({log: 'startsession2', message: {err: 'error here'}});
    });
    
}

module.exports = sessionController;