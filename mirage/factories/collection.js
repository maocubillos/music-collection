import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title() {
        return `Music Collection ${faker.random.word()}`;
    },
    createdAt() {
        return faker.date.past().toLocaleDateString();
    },
});
