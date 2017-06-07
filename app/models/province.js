import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import {hasMany} from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  people: hasMany('person'),

  isZero: computed(function() {
    return get(this, 'name').includes('0')
  }),
});
