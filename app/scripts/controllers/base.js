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
  .controller('BaseCtrl', function (loginService) {
  	this.activeTab = 1;

  	this.setTab = function(tabNum) {
  		this.activeTab = tabNum;
  	};

  	this.isSet = function(tabNum) {
  		return tabNum === this.activeTab;
  	};

  	this.showPage = function() {
  		if(this.loggedIn) {
  			return true;
  		} else if(this.activeTab === 1 || this.activeTab === 2) {
  			return true;
  		} else {
  			return false;
  		}
  	};


  	this.loggedIn = false;
  	this.loginButtonMessage = 'Log in';

    this.logInOut = function(usr, pass) {
      if(this.loggedIn) {
      	this.loggedIn = false;
      	this.loginButtonMessage = 'Log in';
      } else {
      	if(loginService.login(usr, pass)) {
      		this.loggedIn = true;
      		this. loginButtonMessage = 'Log out';
      	}
      }
    };

  });
})();
