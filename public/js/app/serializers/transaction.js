Plum.TransactionSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: '_id',
  attrs: {
    stock: {embedded: 'always'}
  }
});