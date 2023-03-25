const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema.pre('save', function (next) {
    const user = this;
  
    if (this.isModified('password') || this.isNew) {
      bcrypt.hash(user.password, SALT_WORK_FACTOR, function (err, hash) {
        // Store hash in your password DB.
        if (err) return next(err);
        user.password = hash;
        next();
      });
    } else {
      return next();
    }
  });
  
userSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (error, isMatch) {
      if (error) {
        return callback(error);
      } else {
        callback(null, isMatch);
      }
    });
};
  
module.exports = mongoose.model('User', userSchema);
  