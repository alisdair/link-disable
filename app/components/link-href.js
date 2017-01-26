import Ember from 'ember';

let linkHref = Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'target'],
  classNameBindings: ['disabled'],

  click(event) {
    if (this.get('disabled')) {
      event.preventDefault();
      return;
    }

    let target = this.get('target');
    if (!Ember.isBlank(target)) {
      window.open(this.get('href'), target);
    }
  }
});

linkHref.reopenClass({
  positionalParams: 'href'
});

export default linkHref;
