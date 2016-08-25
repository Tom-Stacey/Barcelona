'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.service:AttendeeService
 * @description
 * # AttendeeService
 * Service of the barcelonaApp
 */

(function() {
  angular.module('barcelonaApp')
    .service('loginService', function () {

    	this.login = function(usr, pass) {
        if(usr === 'usr' && pass === 'pass') {
          return true;
        } else {
          return false;
        }
      };
      
    });
})();
