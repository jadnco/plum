Plum.UserSerializer = DS.RESTSerializer.extend({
  primaryKey: 'username',
  normalizePayload: function(payload) {
    console.log(payload);
    return payload;
  }
});