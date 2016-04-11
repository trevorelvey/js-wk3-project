import Ember from 'ember';

export default Ember.Component.extend({
  watchedQuestions: Ember.inject.service(),
  inWatched: Ember.computed('watchedQuestions.questions.[]', function() {
    return this.get('watchedQuestions').includes(this);
  }),


  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToWatched(question) {
      this.get('watchedQuestions').add(question);
    },
  }
});
