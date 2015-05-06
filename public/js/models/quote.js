Plum.Quote = DS.Model.extend({
  Symbol: DS.attr(),
  AverageDailyVolume: DS.attr(),
  Change: DS.attr(),
  DaysLow: DS.attr(),
  DaysHigh: DS.attr(),
  YearLow: DS.attr(),
  YearHigh: DS.attr(),
  MarketCapitalization: DS.attr(),
  LastTradePriceOnly: DS.attr(),
  DaysRange: DS.attr(),
  Name: DS.attr(),
  Volume: DS.attr(),
  StockExchange: DS.attr()
});