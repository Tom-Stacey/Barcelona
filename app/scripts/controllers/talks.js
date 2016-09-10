'use strict';

/**
 * @ngdoc function
 * @name barcelonaApp.controller:TalksCtrl
 * @description
 * # TalksCtrl
 * Controller of the barcelonaApp
 */

(function() {
angular.module('barcelonaApp')
  .controller('TalksCtrl', function ($scope, attendeesService, talksService, loginService) {
  	
  	var talks = talksService.getAllTalks();
  	var userId = loginService.getUserId();

  	for(var talkNum in talks) {
  		talks[talkNum].showDetails = false; 
  		talks[talkNum].showAttendees = false;
  	}

  	this.talksList = talks;

  	this.getNumberOfAttendees = function(talkId) {
  		return getTalkById(talkId).attendees.length;
  	};

    this.getRegisterMessage = function(talkId) {
      if(userAttendingTalk(talkId, userId)) {
        return 'Unregister';
      } else {
        return 'Register';
      }
    };

    this.signOnOff = function(talkId) {
    	if(userAttendingTalk(talkId, userId)) {
    		unRegister(talkId);
    	} else {
    		register(talkId);
    	}
    };

    this.getDetailsMessage = function(talkId) {
    	if(getTalkById(talkId).showDetails) {
    		return 'hide details';
    	} else {
    		return 'more details';
    	}
    };

    this.showHideDetails = function(talkId) {
    	var talk = getTalkById(talkId);
    	talk.showDetails = !talk.showDetails;
    };

    this.detailsVisible = function(talkId) {
    	return getTalkById(talkId).showDetails;
    };


    

    function unRegister(talkId) {
      removeAttendee(talkId);
    }

    function register(talkId) {
    	addAttendee(talkId);
    }

    function userAttendingTalk(talkId, userId) {
    	for(var talkNum in talks) {
    		if(talks[talkNum].id === talkId) {
		      for(var idNum in talks[talkNum].attendees) {
		        if(userId === talks[talkNum].attendees[idNum]) {
		          return true;
		        }
		      }
		    }
	    }
      return false;
    }

    function addAttendee(talkId) {
    	getTalkById(talkId).attendees.push(userId);
    }

    function removeAttendee(talkId) {
    	var talk = getTalkById(talkId);
    	var index = talk.attendees.indexOf(userId);
    	if(index > -1) {
    		talk.attendees.splice(index, 1);
    	}
    }

    function getTalkById(talkId) {
    	for(var talkNum in talks) {
    		if(talks[talkNum].id === talkId) {
    			return talks[talkNum];
    		}
    	}
    }

  });
})();
