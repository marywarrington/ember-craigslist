import Ember from 'ember';

export default Ember.Component.extend({

  fullTitle: Ember.computed('post.title', 'post.price', function() {
    return this.get('post.title') + ": $" + this.get('post.price');
  }),

  sortBy: ['date:desc'],
  sortedPosts: Ember.computed.sort('category.posts', 'sortBy'),
  
  actions: {
    delete(post) {
      if(confirm('Are you sure?')) {
        this.sendAction('delete', post);
      }
    }
  }

});
