import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('cities', function() {
    this.route('show', {path: '/:city_id'}, function(){
      this.resource('markets', function(){});
    });
  });
  this.resource('markets', function() {
    this.route('show', {path: '/:market_id'});
  });
});

export default Router.map(function() {});
