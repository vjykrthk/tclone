(function(){
  
  var app = angular.module("tclone.sections.registration");
  app.controller("tclone.sections.registration.RegistrationController", 
  	["$scope", "$auth", 

  	function ($scope, $auth) {

  		$scope.handleRegistrationbtnclick = function() {
  			console.log("profile ", $scope.registrationForm);

  			$auth.submitRegistration($scope.registrationForm).then(function(res) {
  				console.log("res : ", res);
  			});
  		}
    	
  	}

  ]);
  
}());
