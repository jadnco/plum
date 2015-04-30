var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
  name: String,
  slug: String,
  value: Number,
  // Liquid capital
  cash: Number,
  overallReturn: Number,
  createdAt: Date/*,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  transcations: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }] */
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);