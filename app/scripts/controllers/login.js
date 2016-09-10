'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:AboutCtrl
 * @description
 * # LoginCtrl
 * Controller of the barcelonaApp
 */
 
(function() {
angular.module('barcelonaApp')
  .controller('loginCtrl', function ($scope, $rootScope, $location, loginService) {

  	$scope.email = '';
  	$scope.pass  = '';
  	$scope.remember = false;
  	$scope.displayLoginFailure = false;

  	$scope.submit = function() {
  		if(loginService.login($scope.email, $scope.pass)) {
  			$location.path('/');
  			$rootScope.loggedIn = true;
  			$rootScope.userId = 1;
		  	$scope.email = '';
		  	$scope.pass  = '';
  		} else {
  			$scope.displayLoginFailure = true;
  		}
  	};
  });
})();
