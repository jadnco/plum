Plum.Transaction = DS.Model.extend({
  name: DS.attr('String'),
  value: DS.attr('Number'),
  overallReturn: DS.attr('Number'),
  createdAt: DS.attr('Date')
});