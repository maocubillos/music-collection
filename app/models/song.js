import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
    title: attr('string'),
    artistName: attr('string'),
    albumName: attr('string'),
    year: attr('number'),
    genres: attr('string'),
    albumCover: attr('string'),
    linkSpotify: attr('string'),
    collection: belongsTo()
});
