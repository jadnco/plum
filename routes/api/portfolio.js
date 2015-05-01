var mongoose = require('mongoose');
var Portfolio = require('../../models/portfolio');

module.exports.add = function(req, res) {
  var portfolio = new Portfolio(req.body.portfolio);

  portfolio.save(function(err) {
    if (err) res.send(err);

   res.json({portfolio: portfolio});
  });
};

module.exports.getAll = function(req, res) {
  Portfolio.find(function(err, portfolios) {
    if (err) res.send(err);

    res.json({portfolios: portfolios});
  });
};

module.exports.get = function(req, res, id) {
  Portfolio.findById(id, function(err, portfolio) {
    if (err) res.send(err);

    res.json({portfolio: portfolio});
  });
};

module.exports.update = function(req, res, id) {
  Portfolio.findByIdAndUpdate(id, {$set: req.body.portfolio}, function(err, portfolio) {
    if (err) res.send(err);

    res.json({portfolio: portfolio});
  });
};

module.exports.delete = function(req, res, id) {
  Portfolio.findByIdAndRemove(id, function(err) {
    if (err) res.send(err);

    // Record no longer exists
    res.sendStatus(200);
  });
};