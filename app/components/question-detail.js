import Ember from 'ember';
import ember from 'ember';

export default Ember.Component.extend({
  watchedQuestions: ember.inject.service(),
  inWatched: ember.computed('watchedQuestions.questions.[]', function() {
    return this.get('watchedQuestions').includes(this);
  })
});
