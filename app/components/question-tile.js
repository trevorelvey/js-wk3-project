import Ember from 'ember';

export default Ember.Component.extend({
  watchedQuestions: Ember.inject.service(),
  
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToWatched(question) {
      this.get('watchedQuestions').add(question);
    },
  }
});
