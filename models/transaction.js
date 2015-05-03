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
  },
  // Portfolio relation
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }
});

// Pre save; value = price * shares

module.exports = mongoose.model('Transaction', TransactionSchema);