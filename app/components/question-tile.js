import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Delete?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
