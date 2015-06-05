Plum.ModalOverlayComponent = Ember.Component.extend({
  actions: {
    closeModal: function() {
      var id = this.get('id');

      $('#' + id).find('.modal').removeClass('visible');
      $('#' + id).find('.overlay').removeClass('visible');
    }
  }
});