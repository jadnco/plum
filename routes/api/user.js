var mongoose = require('mongoose');
var User = require('../../models/user');
var gravatar = require('../../functions').gravatar;

module.exports.add = function(req, res) {
  var user = new User(req.body.user);

  user.save(function(err) {
    if (err) res.send(err);
    else res.json({user: user});
  });
};

module.exports.getAll = function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);
    else res.json({users: users});
  });
};

module.exports.get = function(req, res, query) {
  User.find(query, function(err, user) {
    if (err) res.send(err);
    else res.json({user: user});
  });
};

module.exports.update = function(req, res, query) {
  var updated = req.body.user;

  if (updated.email !== undefined) {
    updated.avatar = gravatar(updated.email);  
  }

  User.findOneAndUpdate(query, {$set: updated}, function(err, user) {
    if (err) res.send(err);
    else res.json({user: user});
  });
};

module.exports.delete = function(req, res, query) {
  User.findOneAndRemove(query, function(err) {
    if (err) res.send(err);

    // TODO: Delete all portfolios

    // Record no longer exists
    res.sendStatus(200);
  });
};