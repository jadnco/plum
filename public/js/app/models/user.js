Plum.User = DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  portfolios: DS.hasMany('portfolio'),
  created: DS.attr()
});