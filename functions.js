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
    var query = {$or: [q]};

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      query.$or.push({_id: id});
    }

    return query;
  }
};