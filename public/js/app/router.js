Plum.Router.map(function() {
  this.resource('portfolios')/*, {path: '/:username/portfolios'}, function() {
    this.resource('portfolio', {path: '/:slug'});
  }); */

  this.route('user', {path: 'u/:username'}),
  this.route('quote', {path: 'q/:ticker'}),
  this.resource('users'),
  this.route('not-found', { path: '/*path' });
});