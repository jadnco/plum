var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
  name: String,
  slug: String,
  value: Number,
  overallReturn: Number,
  createdAt: Date/*
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }*/
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);