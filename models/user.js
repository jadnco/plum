var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var gravatar = require('../functions').gravatar;

var UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  avatar: String,
  username: {
    type: String,
    unique: true
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
  this.avatar = gravatar(this.email);

  next();
});

module.exports = mongoose.model('User', UserSchema);