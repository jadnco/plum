/**
* models/stock.js
* -
* Stock data model
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StockSchema = new Schema({
  // Full company name
  name: String,
  // Company ticker; eg. AAPL
  ticker: String,
  sector: String,
  // Trading exchange; eg. NYSE
  exchange: String
}, {_id: false});

module.exports = StockSchema;