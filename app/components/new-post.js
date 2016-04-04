import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        category: this.get('category'),
        price: parseInt(this.get('price')),
        image: this.get('image'),
        contact: this.get('contact'),
        body: this.get('body')
      };
      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
