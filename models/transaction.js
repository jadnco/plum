var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  stock: {
    type: Schema.Types.ObjectId,
    ref: 'Stock'
  },
  // Buy, Sell or Dividend
  type: String,
  // Total shares bought
  shares: Number,
  // Price per share
  price: Number,
  // Total value of trade
  value: Number,
  // Close time of transaction
  closeTime: Date,
  // Portfolio relation
  portfolio: {
    type: Schema.Types.ObjectId,
    ref: 'Portfolio'
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);