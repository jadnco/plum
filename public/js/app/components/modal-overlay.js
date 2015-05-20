Plum.ModalOverlayComponent = Ember.Component.extend({
  type: '',
  isAddToPortfolio: function() {
    return this.get('type').toLowerCase() == 'addtoportfolio';
  }.property('type')
});