Plum.Transaction = DS.Model.extend({
  name: DS.attr(),
  value: DS.attr(),
  overallReturn: DS.attr(),
  createdAt: DS.attr(),
  portfolio: DS.belongsTo('portfolio')
});