var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slugify = require('../functions').slugify;
var Holding = require('./holding');

var PortfolioSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  value: {
    type: Number,
    default: 0
  },
  cash: {
    type: Number,
    default: 0
  },
  overallReturn: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: Date,
  holdings: [Holding],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }]
});

PortfolioSchema.pre('save', function(next) {
  console.log("Portfolio Saved");
  
  this.slug = slugify(this.name);
  this.modified = Date.now;

  // Value will always start out at cash value
  this.value = this.cash;

  //this.holdings.push();
  /* TODO
    - Calculate holding percent of stock
    - Calculate overall return
  */

  next();
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);