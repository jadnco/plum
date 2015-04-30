Plum.Router.map(function() {
  this.resource("portfolio"),
  this.resource("portfolios", {path: '/'}),
  this.resource("user")
});