import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Delete?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
