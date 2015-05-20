Plum.Router.map(function() {
  this.resource('portfolios');/*, {path: '/:username/portfolios'}, function() {
    this.resource('portfolio', {path: '/:slug'});
  }); */

  this.resource('portfolio', {path: 'portfolio/:slug'}, function() {
    this.route('transactions');
  });

  this.route('user', {path: 'user/:username'});
  this.route('quote', {path: 'quote/:ticker'});
  this.resource('users');
  this.route('not-found', { path: '/*path' });
  this.route('test');
});