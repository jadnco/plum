Plum.LoginController = Ember.ObjectController.extend({
  actions: {
    authenticate: function() {
      var creds = this.getProperties('indentification', 'password');

      this.get('session').authenticate('authenticator:custom', creds);
    }
  }
});