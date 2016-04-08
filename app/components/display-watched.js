import Ember from 'ember';

export default Ember.Component.extend({
  watchedQuestions: Ember.inject.service(),

  actions: {
    removeFromWatched(question) {
      this.get('watchedQuestions').remove(question);
    }
  }
});
