import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
    genres: A([ { name:'Classic' }, { name: 'Rock'}, { name: 'Reguetton' } ]),
    model(params) {
        return this.get('store').findRecord('song', params.id);
    }
});
