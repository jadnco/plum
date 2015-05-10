Plum.UserController = Ember.ObjectController.extend({
  username: function() {
    return this.get('id');
  }.property('username')
});