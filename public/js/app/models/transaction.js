Plum.Transaction = DS.Model.extend({
  value: DS.attr(),
  type: DS.attr(),
  shares: DS.attr(),
  price: DS.attr(),
  close: DS.attr(),
  stocks: DS.hasMany('stock'),
  portfolio: DS.belongsTo('portfolio')
});