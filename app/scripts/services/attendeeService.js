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
  .service('attendeesService', function () {

  	var attendees = [
  		{
        id : 1,
        firstName : 'Tom',
        surname : 'Stacey',
        technologies : ['Scala', 'AngularJS', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 2,
        firstName : 'Callum',
        surname : 'Cooper',
        technologies : ['Scala', 'AngularJS', 'SQL', 'Selenium'],
        location : 'Telford'
      },
      {
        id : 3,
        firstName : 'Chris',
        surname : 'Poole',
        technologies : ['Scala', 'AngularJS', 'Selenium', 'SQL'],
        location : 'Telford'
      },
      {
        id : 4,
        firstName : 'Angelica',
        surname : 'Charry',
        technologies : ['Scala', 'AngularJS', 'ReactJS', 'SQL'],
        location : 'London'
      },
      {
        id : 5,
        firstName : 'Chris',
        surname : 'Boucher',
        technologies : ['Scala', 'Karma', 'Java', 'MongoDB'],
        location : 'Telford'
      },
      {
        id : 6,
        firstName : 'Sam',
        surname : 'Raspin',
        technologies : ['Scala', 'Python', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 7,
        firstName : 'Peter',
        surname : 'Newman',
        technologies : ['Scala', 'Python', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 8,
        firstName : 'Vincent',
        surname : 'Tomlinson',
        technologies : ['Scala', 'AngularJS', 'Java', 'MongoDB'],
        location : 'Telford'
      },
      {
        id : 9,
        firstName : 'David',
        surname : 'Gordon',
        technologies : ['Scala', 'Python', 'Java', 'MongoDB'],
        location : 'Telford'
      },
      {
        id : 10,
        firstName : 'Chris',
        surname : 'Walker',
        technologies : ['Scala', 'AngularJS', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 11,
        firstName : 'George',
        surname : 'Westwater',
        technologies : ['Scala', 'AngularJS', 'Java', 'MongoDB'],
        location : 'Telford'
      },
      {
        id : 12,
        firstName : 'James',
        surname : 'Forster',
        technologies : ['Scala', 'Python', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 13,
        firstName : 'Mark',
        surname : 'Kelley',
        technologies : ['Scala', 'AngularJS', 'Java', 'MongoDB'],
        location : 'Telford'
      },
      {
        id : 14,
        firstName : 'Tom',
        surname : 'Dudley',
        technologies : ['Scala', 'Python', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 15,
        firstName : 'Vincent',
        surname : 'Tomlinson',
        technologies : ['Scala', 'AngularJS', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 16,
        firstName : 'William',
        surname : 'Lea',
        technologies : ['Scala', 'AngularJS', 'Java', 'SQL'],
        location : 'Telford'
      },
      {
        id : 17,
        firstName : 'Charles',
        surname : 'Anglin',
        technologies : ['Scala', 'AngularJS', 'Java', 'SQL'],
        location : 'Telford'
      }
  	];

    this.getAllAttendees = function() {
    	return attendees;
    };

    this.getInitialAttendees = function() {
      return attendees.slice(0, 8);
    };

    this.getNextFiveAttendees = function(index) {
      return attendees.slice(index, index + 5);
    };
  });
})();
