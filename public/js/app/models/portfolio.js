Plum.Portfolio = DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  value: DS.attr(),
  cash: DS.attr(),
  overallReturn: DS.attr(),
  created: DS.attr(),
  modified: DS.attr(),
  holdings: DS.hasMany('holding'),
  owner: DS.belongsTo('user'),
  // Automatically load transactions for ref ids
  transactions: DS.hasMany('transaction', {async: true})
});