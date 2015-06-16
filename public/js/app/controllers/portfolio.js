Plum.PortfolioController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      var self = this;
      var confirmation = confirm('Delete \'' + this.get('name') + '\'?');
      
      // Make sure we have user confirmation
      if (confirmation) {
        // Find portfolio record and delete it
        this.store.find('portfolio', this.get('id')).then(function(portfolio) {
          portfolio.destroyRecord();

          self.transitionTo('portfolios');
        });
      }
    }
  }
});