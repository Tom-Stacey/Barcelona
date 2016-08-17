/* global $ */

'use strict';

/**
 * @ngdoc overview
 * @name barcelonaApp
 * @description
 * # barcelonaApp
 *
 * Main module of the application.
 */
angular
  .module('barcelonaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope) {
    var lastCheck = 0;
    var CHECK_INTERVAL = 500; //ms interval for checking at bottom of page

    var check = function() {
      if(Date.now() - lastCheck > CHECK_INTERVAL) {
        lastCheck = Date.now();

        if($(window).scrollTop() >=
            $(document).height() - $(window).height() - 50) {
          $rootScope.$broadcast('SCROLL_TO_BOTTOM');
        }
      }
    };

    setTimeout(function() {
      check();
    }, 0);
    $(window).on('scroll', check);
    $(window).on('resize', check);

    $rootScope.loggedIn = false;
    $rootScope.loginButtonMessage = 'Log in';
    $rootScope.logInOut = function() {
      $rootScope.loggedIn = !$rootScope.loggedIn;
      $rootScope.loginButtonMessage = ($rootScope.loggedIn ? 'Log out' : 'Log in');
      $rootScope.userId = ($rootScope.loggedIn ? 1 : null);
    };
    
  });
