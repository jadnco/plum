var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PortfolioSchema = new Schema({
  name: String,
  slug: String,
  value: Number,
  cash: Number,
  overallReturn: Number,
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }/*,
  transcations: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }] */
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);