// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


angular.module('myApp',[])
 .controller('myCtrl',['$scope',function($scope){
 	$scope.jsRoar = function(name) {
	alert('I am' + name + '. Hear me roar ');
    };
 }]);
