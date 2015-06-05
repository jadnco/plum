Plum.ApplicationController = Ember.ArrayController.extend({
  actions: {
    createNewPortfolio: function() {
      var store = this.store;
      var self  = this;

      console.log("Create new portfolio from controller -->");

      store.find('user', USER).then(function(results) {

        //portfolio.save();
        console.log(results.get('id'));
      });

      var portfolio = this.store.createRecord('portfolio', {
        name: self.get('newPortfolioName'),
        owner: USER
      });

      
      // --> Clear form data
    },
    showNewPortfolioModal: function() {
      $('#new-portfolio-modal').find('.modal').addClass('visible');
      $('#new-portfolio-modal').find('.overlay').addClass('visible');
    }
  }
});