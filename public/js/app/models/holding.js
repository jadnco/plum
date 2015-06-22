Plum.Holding = DS.Model.extend({
  ticker: DS.attr(),
  shares: DS.attr(),
  value: DS.attr(),
  overallReturn: DS.attr(),
  percent: DS.attr()
});