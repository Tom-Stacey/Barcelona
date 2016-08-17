'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.service:AttendeeService
 * @description
 * # AttendeeService
 * Service of the barcelonaApp
 */
angular.module('barcelonaApp')
  .service('attendeesService', function () {

  	var attendees = [
  		{
        id : 1,
        firstName : 'Tom',
        surname : 'Stacey'
      },
      {
        id : 2,
        firstName : 'Callum',
        surname : 'Cooper'
      },
      {
        id : 3,
        firstName : 'Chris',
        surname : 'Poole'
      },
      {
        id : 4,
        firstName : 'Angelica',
        surname : 'Charry'
      },
      {
        id : 5,
        firstName : 'Chris',
        surname : 'Boucher'
      },
      {
        id : 6,
        firstName : 'Sam',
        surname : 'Raspin'
      },
      {
        id : 7,
        firstName : 'Peter',
        surname : 'Newman'
      },
      {
        id : 8,
        firstName : 'Vincent',
        surname : 'Tomlinson'
      },
      {
        id : 9,
        firstName : 'David',
        surname : 'Gordon'
      }
  	];

    this.getAllAttendees = function() {
    	return attendees;
    };
  });
