Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    error: function(err) {
      Plum.Logger.error(err);
      this.transitionTo('/not-found');
      console.log("an error: " + err.message);
    }
  }
});