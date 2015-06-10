Plum.ApplicationController = Ember.ArrayController.extend({
  user: null,
  portfolios: null,
  newPortfolio: {
    name: null,
    cash: null
  },
  actions: {
    showNewPortfolioModal: function() {
      $('#new-portfolio-modal').find('.modal').addClass('visible');
      $('#new-portfolio-modal').find('.overlay').addClass('visible');
    },
    closeNewPortfolioModal: function() {
      $('#new-portfolio-modal').find('.modal').removeClass('visible');
      $('#new-portfolio-modal').find('.overlay').removeClass('visible');

      // Clear input value
      $('#new-portfolio-modal').find('input:not([type=submit])').val('');
    }
  }
});