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
  value: Number,
  cash: Number,
  overallReturn: Number,
  created: {
    type: Date,
    default: Date.now
  },
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
  this.slug = slugify(this.name);
  //this.holdings.push();
  /* TODO
    - Calculate holding percent of stock
    - Calculate overall return
  */

  next();
});

PortfolioSchema.pre('update', function() {
  console.log('UPADTED PORTFOLIO');
  // Just test fixture data
  /*var holdings = [
    {
      ticker: 'AAPL',
      value: 1562.28,
      overallReturn: 0.12,
      percent: 0.25
    },
    {
      ticker: 'MSFT',
      value: 330.28,
      overallReturn: 0.18,
      percent: 0.25
    },
    {
      ticker: 'GOOGL',
      value: 3672.28,
      overallReturn: 0.01,
      percent: 0.25
    },
    {
      ticker: 'GE',
      value: 8962.28,
      overallReturn: -0.22,
      percent: 0.25
    }
  ];
  
  this.update({$set: {holdings: [holdings]}});*/
  /* TODO - Holdings
    - Calculate holding percent of stock
    - Calculate overall return
  */

  // Get all transaction tickers, 
  // add to array and do math to calc % and value

  /* TODO - Portfolio
    - Calculate current total portfolio value
  */
});

PortfolioSchema.pre('remove', function(next) {
  // Remove portfolio reference from related user
  this.model('User').update(
    {_id: this.owner},
    {$pull: {portfolios: this._id}},
    next
  );
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);