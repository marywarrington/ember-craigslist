import Ember from 'ember';

export default Ember.Component.extend({

  fullTitle: Ember.computed('post.title', 'post.price', function() {
    return this.get('post.title') + ": $" + this.get('post.price');
  }),
  actions: {
    delete(post) {
      if(confirm('Are you sure?')) {
        this.sendAction('delete', post);
      }
    }
  }

});
