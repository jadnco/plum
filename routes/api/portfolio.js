var mongoose = require('mongoose');
var Portfolio = require('../../models/portfolio');
var User = require('../../models/user');

module.exports.add = function(req, res) {
  var portfolio = new Portfolio(req.body.portfolio);

  portfolio.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      User.findByIdAndUpdate(portfolio.owner,
        {$push: {'portfolios': portfolio._id}},
        {safe: true, upsert: true}, function(err, user) {
          if (err) res.send(err);
        }
      );

      res.json({portfolio: portfolio});  
    } 
  });
};

module.exports.getAll = function(req, res) {
  Portfolio.find(function(err, portfolios) {
    if (err) res.send(err);
    else res.json({portfolios: portfolios});
  });
};

module.exports.get = function(req, res, query) {
  Portfolio.find(query, function(err, portfolio) {
    if (err) res.send(err);
    else res.json({portfolio: portfolio});
  });
};

module.exports.getByQuery = function(req, res, query) {
  User.find(query, function(err, user) {
    Portfolio.find({_id: {$in: user[0].portfolios}}, function(err, portfolios) {
      if (err) res.send(err);
      else res.json({portfolios: portfolios});
    });
  });
};

module.exports.update = function(req, res, query) {
  Portfolio.findOneAndUpdate(query, {$set: req.body.portfolio}, function(err, portfolio) {
    if (err) res.send(err);
    else res.json({portfolio: portfolio});
  });
};

module.exports.delete = function(req, res, id) {
  Portfolio.findByIdAndRemove(id, function(err) {
    if (err) res.send(err);
    else res.sendStatus(200);    
  });
};