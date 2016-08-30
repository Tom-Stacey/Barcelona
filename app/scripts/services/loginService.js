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

      var userId = 0;

    	this.login = function(usr, pass) {
        if(usr === 'usr' && pass === 'pass') {
          userId = 1;
          return true;
        } else {
          return false;
        }
      };

      this.getUserId = function() {
        return userId;
      };
      
    });
})();
