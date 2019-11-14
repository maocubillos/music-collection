import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
    title: attr('string'),
    artistName: attr('string'),
    albumName: attr('string'),
    collection: belongsTo()
});
