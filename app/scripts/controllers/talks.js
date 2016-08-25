'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:TalksCtrl
 * @description
 * # TalksCtrl
 * Controller of the barcelonaApp
 */

(function() {
angular.module('barcelonaApp')
  .controller('TalksCtrl', function ($scope, attendeesService, talksService) {
  	
  	this.talksList = talksService.getAllTalks();
  	this.getNumberOfAttendees = function(talkId) {
  		return talksService.getTotalAttendees(talkId);
  	};
  });
})();
