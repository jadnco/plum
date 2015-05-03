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
  },
  portfolios: [{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }] 
});

module.exports = mongoose.model('User', UserSchema);