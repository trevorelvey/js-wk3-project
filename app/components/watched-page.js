import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeFromWatched(question) {
      this.get('watchedQuestions').remove(question);
    },
  }
});
