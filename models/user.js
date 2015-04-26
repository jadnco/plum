var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  username: String,
  passwordHash: String,
  value: Number,
  overallReturn: Number,
  createdAt: Date/*
  portfolios: [{
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }]*/
});

module.exports = mongoose.model('User', UserSchema);