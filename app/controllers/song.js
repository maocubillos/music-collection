import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
    genres: A([ { name:'Classic' }, { name: 'Rock'}, { name: 'Reguetton' } ]),
    selectedGenre: computed('model.genres', function () {
        return {name: this.get('model.genres')};
    }),
    actions: {
        updateSong() {
            const songModel = this.get('model');
            const selectedGenre = this.get('selectedGenre');
            this.get('store').findRecord('song', songModel.id).then(function(song) {
                song.set('genres', selectedGenre.name);
                song.save();
              });
        }
    }
});
