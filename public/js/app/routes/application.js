Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    search: function(term) {
      if (term) {
        this.set('isSearching', true);
        var self = this;

        self.controller.store.find('stock', {query: term}).then(function(results) {
          self.controller.set('model', results);
        });
      } else {
        this.set('isSearching', false);
      }
    },
    error: function(err) {
      /*Plum.Logger.error(err);
      this.transitionTo('/not-found');*/
      console.log("An error: " + err.message);
    }
  }
});