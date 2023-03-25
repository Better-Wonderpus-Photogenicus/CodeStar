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
        if (results) next();
        else Session.create({ cookieId: req.cookies.ssid })
        .then(() => next());
    })
        .catch((err) => {
        return next('error creating session');
        });
    
}

module.exports = sessionController;