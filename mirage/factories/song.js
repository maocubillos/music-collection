import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    title() {
        return `Song ${faker.random.words(2)}`;
    },
    artistName() {
        return faker.name.findName();
    },
    albumName() {
        return faker.random.words(3);
    },
    genres(i) {
        let genres = [ 'Classic', 'Rock', 'Reguetton' ];

        return genres[i % genres.length];
    },
    albumCover(i) {
        return `albumCover ${i}`;
    },
    year() {
        return faker.date.past().toLocaleDateString();
    },
    link() {
        return faker.system.filePath();
    },
    collection: association()
});
