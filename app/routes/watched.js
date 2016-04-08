import Ember from 'ember';

export default Ember.Route.extend({
  watchedQuestions: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      watchedQuestions: this.get('watchedQuestions')
    });
  }
});
