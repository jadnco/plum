Plum.Holding = DS.Model.extend({
  ticker: DS.attr(),
  shares: DS.attr(),
  marketValue: DS.attr(),
  overallReturn: DS.attr(),
  overallGain: DS.attr(),
  dayChange: DS.attr(),
  dayChangePercent: DS.attr(),
  costBasis: DS.attr(),
  lastPrice: DS.attr()
});