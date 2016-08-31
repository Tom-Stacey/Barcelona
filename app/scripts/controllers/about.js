'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barcelonaApp
 */
 
(function() {
angular.module('barcelonaApp')
  .controller('AboutCtrl', function () {
  	this.amenities = ['Swimming pool', 'Restaurant', 'Bar', 'Guided tours'];
  });
})();
