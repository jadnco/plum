Plum.LoginController = Ember.ObjectController.extend({
  password: '',
  identification: '',
  actions: {
    authenticate: function() {
      var creds = this.getProperties('identification', 'password');
      console.log(creds);

      this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', creds);
      console.log(this.get('session'));
    }
  }
});