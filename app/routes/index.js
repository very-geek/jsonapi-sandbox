import Route from 'ember-route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.resolve({
      people: this.store.findAll('person', {include: 'province'}),
    });
  }
});
