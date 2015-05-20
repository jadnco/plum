Plum.TransactionSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: '_id',
  attrs: {
    stocks: {embedded: 'always', key: 'stock'}
  }
});