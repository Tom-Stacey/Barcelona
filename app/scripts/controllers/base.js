'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the barcelonaApp
 */

(function() {
angular.module('barcelonaApp')
  .controller('BaseCtrl', function (loginService, $rootScope) {
  	this.activeTab = 1;

  	this.setTab = function(tabNum) {
  		this.activeTab = tabNum;
  	};

  	this.isSet = function(tabNum) {
  		return tabNum === this.activeTab;
  	};

  	this.showPage = function() {
  		if($rootScope.loggedIn) {
  			return true;
  		} else if(this.activeTab === 1 || this.activeTab === 2) {
  			return true;
  		} else {
  			return false;
  		}
  	};

    this.logOut = function() {
      console.log('wotcha');
      $rootScope.loggedIn = false;
    };


  });
})();
