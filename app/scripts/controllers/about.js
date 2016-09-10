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
  .controller('AboutCtrl', function () {
  	this.amenities = ['Swimming pool', 'Restaurant', 'Bar', 'Guided tours', 'Lion cage'];

  	this.images = [
  		{
  			fileName: 'melia-sky-0.jpg'
  		},
  		{
  			fileName: 'melia-sky-1.jpg'
  		},
  		{
  			fileName: 'melia-sky-2.jpg'
  		},
  		{
  			fileName: 'melia-sky-3.jpg'
  		}
  	];

  	var mainImageNum = 0;
  	var imagesLoc = 'images/hotel/';

  	this.mainImageLoc = function() {
  		return imagesLoc + this.images[mainImageNum].fileName;
  	};

  	this.imageLoc = function(imgNum) {
  		return imagesLoc + this.images[imgNum].fileName;
  	};

  	this.setMainImage = function(imgNum) {
  		mainImageNum = imgNum;
  	};

  });
})();
