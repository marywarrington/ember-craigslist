import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); }}),
  title: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  contact: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
});
