Plum.ApplicationSerializer = DS.RESTSerializer.extend({
  // Match MongoDB's id prefix
  primaryKey: '_id'
});