'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.service:TalksServoce
 * @description
 * # TalksServoce
 * Service of the barcelonaApp
 */

(function() {
angular.module('barcelonaApp')
  .service('talksService', function () {

    var talks = [
      {
        id : 1,
        subject : 'DevOps first look',
        speaker : 'Mark Otto',
        venue : 'Auditorium 1',
        features : ['Deployments', 'Live maintenance', 'Platform collaboration', 'Environment principles'],
        description : 'An introductory look into the fundamental principles of DevOps and how an organisation can use Continuos Integration and Continuos Deployment to keep its codebase up to date and controllable',
        attendees : [1,2,4,7,8]
      },
      {
        id : 2,
        subject : 'Web Design principles',
        venue : 'Auditorium 2',
        speaker : 'Jacob Thornton',
        features : ['Mobile first design', 'Dynamic pages with CSS', 'Ensuring compatibility'],
        description : 'An overview of modern, responsive Web Design practices that allow businesses to tailor their web presence to suit market needs',
        attendees : [2,3,4,6,8]
      },
      {
        id : 3,
        subject : 'Pega world',
        speaker : 'Larry Johnson',
        venue : 'Auditorium 3',
        features : ['Dynamic role actualisation', 'Promise delivery in big data', 'Enabling services for real time growth'],
        description : 'This talk will take you through how Pega can help you to deliver real benefits to your clients in language that they will understand, but that will have a real and significant impact on how their core systems function',
        attendees : [3,4,5,9]
      }
    ];

    function getTalkById(talkId) {
      for(var talkNum in talks) {
        if(talks[talkNum].id === talkId) {
          return talks[talkNum];
        }
      }
      return null;
    }

    this.getAllTalks = function() {
    	return talks;
    };

    this.addAttendee = function(talkId, userId) {
      getTalkById(talkId).attendees.push(userId);
    };

    this.removeAttendee = function(talkId, userId) {
      var talk = getTalkById(talkId);
      var index = talk.attendees.indexOf(userId);
      if(index > -1) {
        talk.attendees.splice(index, 1);
      }
    };

    this.getTotalAttendees = function(talkId) {
      return getTalkById(talkId).attendees.length;
    };

  });
})();
