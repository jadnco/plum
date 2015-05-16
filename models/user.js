var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

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

UserSchema.methods.comparePassword = function(pass, cb) {
  bcrypt.compare(pass, this.password, function(err, matches) {
    if (err) return cb(err);

    cb(null, matches);
  });
};

module.exports = mongoose.model('User', UserSchema);