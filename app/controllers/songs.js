import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
    newSong: computed(
        'title',
        'artistName',
        'albumName',
        'albumCover',
        'selectedGenre',
        'year',
        'linkSpotify',
        function () {
            return {
                title: this.get('title'),
                artistName: this.get('artistName'),
                albumName: this.get('albumName'),
                albumCover: this.get('albumCover'),
                genres: this.get('selectedGenre.name'),
                year: this.get('year'),
                linkSpotify: this.get('linkSpotify'),
            };
        }
    ),
    genres: A([ { name:'Classic' }, { name: 'Rock'}, { name: 'Reguetton' } ]),
    actions: {
        submitSong() {
            const newSong = this.get('store').createRecord('song', this.get('newSong'));
            newSong.save();
        },
        goToSongDetail(songId) {
            this.transitionToRoute('song', {id: songId})
        }
    }
});
