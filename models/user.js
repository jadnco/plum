var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: String,
  passwordHash: String,
  value: Number,
  overallReturn: Number,
  createdAt: Date
});

module.exports = mongoose.model('User', UserSchema);