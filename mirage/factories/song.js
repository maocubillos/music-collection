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
    albumCover() {
        return faker.image.imageUrl();
    },
    year() {
        return faker.date.past(10).getFullYear();
    },
    linkSpotify() {
        return faker.internet.url();
    },
    collection: association()
});
