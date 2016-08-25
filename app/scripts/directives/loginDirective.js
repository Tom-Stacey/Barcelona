'use strict';


(function() {
	var app = angular.module('barcelonaApp');

	app.directive('loginSection', function() {
	    return {
	    	restrict : 'E',
	        template : '<h1 ng-show="{{loggedIn}}" ng-click="loggedIn = !loggedIn">Logged In</h1><h1 ng-hide="{{loggedIn}}" ng-click="loggedIn = !loggedIn">Not Logged In</h1>'
	    };
	});
})();
