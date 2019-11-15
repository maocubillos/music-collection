import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
    creatingSong: false,
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
    resetForm() {
        this.set('title', null);
        this.set('artistName', null);
        this.set('albumName', null);
        this.set('albumCover', null);
        this.set('selectedGenre.name', null);
        this.set('year', null);
        this.set('linkSpotify', null);
    },
    genres: A([ { name:'Classic' }, { name: 'Rock'}, { name: 'Reguetton' } ]),
    actions: {
        submitSong() {
            const newSong = this.get('store').createRecord('song', this.get('newSong'));
            newSong.save();
            this.resetForm();
            this.send('toggleSongForm');
        },
        goToSongDetail(songId) {
            this.transitionToRoute('song', {id: songId})
        },
        toggleSongForm() {
            this.toggleProperty('creatingSong');
        }
    }
});
