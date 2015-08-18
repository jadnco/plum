var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HoldingSchema = new Schema({
  ticker: String,
  shares: Number,
  marketValue: Number,
  overallReturn: Number,
  overallGain: Number,
  dayChange: Number,
  costBasis: Number,
  lastPrice: Number
});

module.exports = HoldingSchema;