'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:AttendeesCtrl
 * @description
 * # AttendeesCtrl
 * Controller of the barcelonaApp
 */

(function() {
	angular.module('barcelonaApp')
	  .controller('AttendeesCtrl', function ($scope, attendeesService) {
	  	
	  	this.atts = attendeesService.getAllAttendees();
	  });
})();
