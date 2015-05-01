Plum.UserRoute = Ember.Route.extend({

  model: function(params) {
    console.log(params.username);
    return this.store.find('user', {
      username: params.username
    });
  }
});