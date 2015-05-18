var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var colors = require('colors');

var UserSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  portfolios: [{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }] 
});

UserSchema.pre('save', function(next) {
  var user = this;

  // Check if the password was modified
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;

      next();
    });
  });
});

UserSchema.methods.compare = function(pass, cb) {
  console.log('---- PASS COMPARE ----'.bgYellow.black);
  var user = this;

  bcrypt.compare(pass, user.password, function(err, matches) {
    console.log(pass);
    console.log(user.password);
    if (err) return cb(err);

    cb(null, matches);
  });
};

module.exports = mongoose.model('User', UserSchema);