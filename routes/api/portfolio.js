var mongoose = require('mongoose');
var Portfolio = require('../../models/portfolio');
var User = require('../../models/user');
var slugify = require('../../functions').slugify;
var colors = require('colors');

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
          else res.json({portfolio: portfolio});

          console.log(('Created portfolio: ' + portfolio.name).bgGreen.black);  
        }
      );
    } 
  });
};

module.exports.getAll = function(req, res) {
  Portfolio.find(function(err, portfolios) {
    if (err) res.send(err);
    else res.json({portfolios: portfolios});
  }).sort('-created');
};

module.exports.get = function(req, res, query) {
  Portfolio.find(query, function(err, portfolio) {
    if (err) res.send(err);
    else res.json({portfolio: portfolio});
  });
};

module.exports.getByQuery = function(req, res, query) {
  User.findOne(query, function(err, user) {
    Portfolio.find({_id: {$in: user.portfolios}}, function(err, portfolios) {
      if (err) res.send(err);
      else res.json({portfolios: portfolios});

      // TODO:
      // > Update value based on cash and holdings
    });
  });
};

module.exports.update = function(req, res, query) {
  var updated = req.body.portfolio;

  if (updated.name !== undefined) {
    updated.slug = slugify(updated.name);  
  }
  
  updated.modified = Date.now();

  Portfolio.findOneAndUpdate(query, {$set: updated}, function(err, portfolio) {
    if (err) res.send(err);
    else res.json({portfolio: portfolio});
  });
};

module.exports.delete = function(req, res, query) {
  Portfolio.findOneAndRemove(query, function(err, portfolio) {
    if (err || !portfolio) res.send(err);
    else {
      // Delete reference from user
      User.findByIdAndUpdate(portfolio.owner,
        {$pull: {'portfolios': portfolio._id}}, function(err) {
          if (err) res.send(err);
          else {
            res.sendStatus(200);
          }
        }
      );

      console.log(('Deleted portfolio: ' + portfolio.name).bgRed.white);
    }
  });
};