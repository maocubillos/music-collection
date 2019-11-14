import Component from '@ember/component';

export default Component.extend({
    actions: {
        goToCollectionDetail(collection) {
            // eslint-disable-next-line no-console
            console.log({id:collection.id}),
            this.goToCollectionRoute(collection.id);
        }
    }
});
