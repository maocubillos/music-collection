import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToCollection() {
            this.transitionToRoute('songs');
        }
    }
});
