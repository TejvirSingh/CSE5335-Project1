// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


angular.module('myApp',[])
 .controller('myCtrl',['$scope',function($scope){
 	$scope.jsRoar = function(name) {
	alert('I am' + name + '. Hear me roar ');
    };
 }]);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

;
