Plum.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
  actions: {
    invalidateSession: function() {
      this.get('session').invalidate();
    },
    search: function(term) {
      var self = this;

      if (term.length > 0) {
        self.controller.store.find('stock', {query: term}).then(function(results) {
          self.controller.set('model', results);
        });
      }
    },
    loading: function() {
      return true;
    },
    error: function(err) {
      /*Plum.Logger.error(err);
      this.transitionTo('/not-found');*/
      console.log("An error: " + err.message);
    }
  }
});