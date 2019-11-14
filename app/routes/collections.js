import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('collection');
    },
    actions: {
        goToCollection(collection) {
            this.transitionTo('collection', collection.id);
        }
    }
});
