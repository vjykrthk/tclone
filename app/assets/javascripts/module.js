var tclone = angular.module("tclone", ["ngRoute", 
	"templates", 
	"tclone.data", 
	"tclone.components", 
	"tclone.sections",
	"tclone.sections.registration",
	"tclone.sections.login",
	"tclone.sections.userProfile",
	"tclone.sections.userList"
	 ]);


tclone.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:"sections/registration/registration.html",
		controller:"tclone.sections.registration.RegistrationController"
	})
	.when('/signin', {
		templateUrl:"sections/login/login.html",
		controller:"tclone.sections.login.LoginController"
	})
	.when('/user_profile', {
		templateUrl:"sections/user_profile/user_profile.html",
		controller:"tclone.sections.userProfile.UserProfileController"	
	})
	.when('/user_list', {
		templateUrl: "sections/user_list/user_list.html",
		controller:"tclone.sections.userList.UserListController"
	})

}]);