/**
* public/js/app/router.js
* -
* Ember route map
*/
Plum.Router.map(function() {
  this.resource('portfolios', {path: '/'});

  this.resource('portfolio', {path: 'portfolio/:slug'}, function() {
    this.route('transactions');
  });

  this.route('user', {path: 'user/:username'});
  this.route('quote', {path: 'quote/:ticker'});
  this.resource('users');
  this.route('not-found', { path: '/*path' });
  this.route('test');
});