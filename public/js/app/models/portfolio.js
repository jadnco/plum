Plum.Portfolio = DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  value: DS.attr(),
  cash: DS.attr(),
  overallReturn: DS.attr(),
  created: DS.attr(),
  owner: DS.belongsTo('user'),
  transactions: DS.hasMany('transaction', {async: true})
});