import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      answers: this.store.findAll('answer'),
      questions: this.store.findAll('question')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('question', newQuestion.id);
    },
    update(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
