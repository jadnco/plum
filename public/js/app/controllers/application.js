Plum.ApplicationController = Ember.ArrayController.extend({
  actions: {
    showNewPortfolioModal: function() {
      $('#new-portfolio-modal').find('.modal').addClass('visible');
      $('#new-portfolio-modal').find('.overlay').addClass('visible');
    }
  }
});