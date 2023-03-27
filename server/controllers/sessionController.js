const Session = require('../models/sessionModel');
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
    //CHANGE FROM CALLBACK
    //   Session.exists({ cookieId: req.cookies.ssid }, (err, results) => {
    //   if (results && req.cookies.ssid) {
    //     return next();
    //   } else {
    //     res.redirect('/signup');
    //   }
    // });
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
            return next({log: 'startsession', message: {err: 'error here'}});})
        }   
    })
    .catch((err) => {
    return next({log: 'startsession2', message: {err: 'error here'}});
    });
    
}

module.exports = sessionController;