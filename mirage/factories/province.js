import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Province ${i}`;
  },

  afterCreate(province, server) {
    server.createList('person', 2, {province});
  }
});
