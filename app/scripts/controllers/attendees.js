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
	  	
	  	$scope.atts = attendeesService.getInitialAttendees();
	  	$scope.attendeeIndex = $scope.atts.length;
	  	$scope.updateIndex = function() {
	  		$scope.attendeeIndex = $scope.atts.length;
	  	};

	  	$scope.$on('SCROLL_TO_BOTTOM', function() {
	  		var newAtts = attendeesService.getNextFiveAttendees($scope.attendeeIndex);
	  		$scope.atts = $scope.atts.concat(newAtts);
	  		$scope.updateIndex();

	  		$scope.$apply();
	  	});

	  });
})();
