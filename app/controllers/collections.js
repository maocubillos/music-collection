import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToCollectionRoute(collectionId) {
            this.transitionToRoute('collection', collectionId);
        }
    }
});
