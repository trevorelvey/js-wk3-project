import DS from 'ember-data';
import ember from 'ember';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  text: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),

  watchedQuestions: ember.inject.service(),
  inWatched: ember.computed('watchedQuestions.questions.[]', function() {
    return this.get('watchedQuestions').includes(this);
  })
});
