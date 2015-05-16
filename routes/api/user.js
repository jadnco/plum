var mongoose = require('mongoose');
var User = require('../../models/user');

module.exports.add = function(req, res) {
  var user = new User(req.body.user);

  user.save(function(err) {
    if (err) res.send(err);

   res.json({user: user});
  });
};

module.exports.getAll = function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);

    res.json({users: users});
  });
};

module.exports.get = function(req, res, query) {
  User.find(query, function(err, user) {
    if (err) res.send(err);

    console.log('******* User Request *******')
    console.log("Found user: " + user);
    console.log('****************************');

    res.json({user: user});
  });
};

module.exports.update = function(req, res, id) {
  User.findByIdAndUpdate(id, {$set: req.body.user}, function(err, user) {
    if (err) res.send(err);

    res.json({user: user});
  });
};

module.exports.delete = function(req, res, id) {
  User.findByIdAndRemove(id, function(err) {
    if (err) res.send(err);

    // TODO: Delete all portfolios

    // Record no longer exists
    res.sendStatus(200);
  });
};