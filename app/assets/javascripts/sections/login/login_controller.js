(function(){
  
  var app = angular.module("tclone.sections.login");
  app.controller("tclone.sections.login.LoginController", 
  	["$scope", "$auth", "$location",

  	function ($scope, $auth, $location) {

  		$scope.handleSignInBtnClick = function() {
  			$auth.submitLogin($scope.loginForm)
			.then(function(user) {
				console.log("user :", user);			
				$location.path('/');
			})	
			.catch(function(res) {

			});
  		}



  	}
  	
  ]);
  
}());
