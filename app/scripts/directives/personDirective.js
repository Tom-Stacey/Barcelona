'use strict';


(function() {
	var app = angular.module('barcelonaApp');

	app.directive('personDirective', function() {
	    return {
	    	restrict : 'E',
	        template : '<p>Name: {{attendee.firstName}} {{attendee.surname}}</p>ID: {{attendee.id}}<p>'
	    };
	});
})();