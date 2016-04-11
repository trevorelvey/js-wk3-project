import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      this.set('author', '');
      this.set('title', '');
      this.set('text', '');
    }
  }
});
