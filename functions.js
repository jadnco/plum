var md5 = require('MD5');

module.exports = {
  slugify: function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  query: function(id, q) {
    if (id != undefined) {
      var query = {$or: [q]};

      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        query.$or.push({_id: id});
      }
    }
    
    return query;
  },
  gravatar: function(email) {
    var gravatar = 'http://www.gravatar.com/avatar/';
    
    if (email !== undefined) {
      return gravatar + md5(email);
    }
    
    return '';
  }
};