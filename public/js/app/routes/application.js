Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    search: function(term) {
      console.log("calling search action from route: " + term);

      if (term) {
        //this.set('isSearching', true);
        var self = this;

        this.store.find('stock', {query: term}).then(function(results) {
          self.set('model', results);
        });
      }
    },
    error: function(err) {
      /*Plum.Logger.error(err);
      this.transitionTo('/not-found');*/
      console.log("An error: " + err.message);
    }
  }
});