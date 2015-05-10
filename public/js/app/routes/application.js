Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    search: function() {
      console.log("calling search action from route");
    },
    error: function(err) {
      /*Plum.Logger.error(err);
      this.transitionTo('/not-found');*/
      console.log("An error: " + err.message);
    }
  }
});