Plum.Portfolio = DS.Model.extend({
  _id: DS.attr(),
  name: DS.attr(),
  slug: DS.attr(),
  value: DS.attr(),
  cash: DS.attr(),
  overallReturn: DS.attr(),
  created: DS.attr(),
  modified: DS.attr(),
  holdings: DS.hasMany('holding'),
  owner: DS.belongsTo('user'),
  transactions: DS.hasMany('transaction')
});