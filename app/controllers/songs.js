import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    genres: A([ { name:'Classic' }, { name: 'Rock'}, { name: 'Reguetton' } ]),
    actions: {
        submitSong() {
            this.get('store').createRecord('song', {
                title: this.get('title'),
                artistName: this.get('artistName')
            });
        },
    }
});
