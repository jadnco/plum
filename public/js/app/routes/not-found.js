Plum.NotFoundRoute = Ember.Route.extend({
  redirect: function() {
    var url = this.router.location.formatURL('/not-found');
    
    if (window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
  }
});