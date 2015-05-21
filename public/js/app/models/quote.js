Plum.Quote = DS.Model.extend({
  ticker: DS.attr(),
  averageDailyVolume: DS.attr(),
  change: DS.attr(),
  daysLow: DS.attr(),
  daysHigh: DS.attr(),
  yearLow: DS.attr(),
  yearHigh: DS.attr(),
  marketCapitalization: DS.attr(),
  lastTradePriceOnly: DS.attr(),
  daysRange: DS.attr(),
  name: DS.attr(),
  volume: DS.attr(),
  stockExchange: DS.attr(),
  percentChange: DS.attr(),
  lastTradeTime: DS.attr()
});