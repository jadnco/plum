Plum.User = DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  email: DS.attr(),
  avatar: DS.attr(),
  portfolios: DS.hasMany('portfolio'),
  created: DS.attr()
});