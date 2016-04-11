import Ember from 'ember';

export function questionInterest(params) {
  var interest = params[0];

  if(interest.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>')
  }
}

export default Ember.Helper.helper(questionInterest);
