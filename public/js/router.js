Plum.Router.map(function() {
  this.resource('portfolio', {path: '/:slug'}),
  this.resource('portfolios', {path: '/'}),
  this.resource('user', {path: 'u/:username'}),
  this.resource('quote', {path: 'q/:ticker'}),
  this.resource('users'),
  this.route('not-found', { path: '/*path' });
});