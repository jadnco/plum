Plum.PortfolioSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: 'slug',
  attrs: {
    holdings: {embedded: 'always'},
    transactions: {embedded: 'always'},
    _id: 'slug'
  }
});