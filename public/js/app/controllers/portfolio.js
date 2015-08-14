Plum.PortfolioController = Ember.ObjectController.extend({
  needs: 'application',
  newDeposit: {
    cash: null
  },
  actions: {
    showNewDepositModal: function() {
      $('#new-deposit-modal').find('.modal').addClass('visible');
      $('#new-deposit-modal').find('.overlay').addClass('visible');
    },
    closeNewDepositModal: function() {
      this.set('newDeposit.cash', null);

      $('#new-deposit-modal').find('.modal').removeClass('visible');
      $('#new-deposit-modal').find('.overlay').removeClass('visible');

      // Clear values
      $('#new-deposit-modal').find('input[name=cash]').val('');
      $('#new-deposit-modal').find('.form-error').text('');
      $('#new-deposit-modal').find('.total-value').text('');
    }
  }
});