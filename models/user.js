var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);