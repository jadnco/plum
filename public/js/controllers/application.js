Plum.ApplicationController = Ember.ArrayController.extend({
  term: '',
  actions: {
    search: function() {
      //var term = this.get('term');
      console.log("you are searching from controller");

      /*if (term) {
        //this.set('isSearching', true);
        var controller = this;

        this.store.find('symbol', {query: term}).then(function(results) {
          controller.set('model', results);
        });
      } */
    }
  }
});