'use strict';

angular.module('barcelonaApp').config(function($routeProvider) {
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
      controllerAs: 'login'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/talks', {
      templateUrl: 'views/talks.html',
      controller: 'TalksCtrl',
      controllerAs: 'talks'
    })
    .when('/attendees', {
      templateUrl: 'views/attendees.html',
      controller: 'AttendeesCtrl',
      controllerAs: 'attendees'
    })
    .otherwise({
      redirectTo: '/'
    });

});
