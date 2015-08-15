/**
* models/transaction.js
* -
* Transaction data model
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Stock = require('./stock');

var TransactionSchema = new Schema({
  stock: [Stock],
  // Buy, Sell or Dividend
  type: String,
  // Total shares bought
  shares: Number,
  // Price per share
  price: Number,
  // Total value of trade
  value: Number,
  // Close time of transaction
  close: {
    type: Date,
    default: Date.now
  }
});

// Before a new transaction is saved
TransactionSchema.pre('save', function(next) {
  // Calculate value, round to two decimals
  this.value = Math.round((this.shares * this.price) * 100) / 100;

  next();
});

module.exports = TransactionSchema;