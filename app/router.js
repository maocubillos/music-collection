import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('collections');
  this.route('songs');
  this.route('song', { path: 'song/:id'});
});

export default Router;
