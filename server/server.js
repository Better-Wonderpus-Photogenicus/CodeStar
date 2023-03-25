const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const bloomController = require('./controllers/bloomController');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController')

const MONGO_URI = 'mongodb+srv://peterfeng96:6nKn8jFLOFpicqD2@cluster0.xpivncd.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'CodeStar',
  });

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


if (process.env.NODE_ENV === 'production') {
    app.use('/build', express.static(path.join(__dirname, '../build')));
}
  
app.use(express.static(path.join(__dirname, '../client/')));

//ROUTES

app.post('/api', bloomController.getCompatibility, (req, res) => {
    return res.status(200).json(res.locals.text)
})

app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
    return res.sendStatus(200);
})

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
    // res.redirect('/homepage'); // or whatever
    res.sendStatus(200);
})

// ERROR HANDLING

app.use('*', (req, res) => {
    return res.status(404);
});
  
app.use((err, req, res, next) => {
const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
};
const errorObj = Object.assign({}, defaultErr, err);
console.log(errorObj.log);
return res.status(errorObj.status).json(errorObj.message);
});
  
// SET SERVER TO LISTEN 

app.listen(port, () => {
console.log(`CodeStar listening on port ${port}`)
});