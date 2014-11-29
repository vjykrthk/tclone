var tclone = angular.module("tclone", ["ngRoute",
	"ng-token-auth" ,
	"templates", 
	"tclone.data", 
	"tclone.components", 
	"tclone.sections",
	"tclone.sections.registration",
	"tclone.sections.login",
	"tclone.sections.userProfile",
	"tclone.sections.userList",
	"tclone.sections.mainProfile"
	 ]);


tclone.config(["$routeProvider", "$authProvider", 
	function($routeProvider, $authProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "sections/main_profile/main_profile.html",
			controller: "tclone.sections.mainProfile.MainProfileController"
		})
		.when('/sign_up', {
			templateUrl:"sections/registration/registration.html",
			controller:"tclone.sections.registration.RegistrationController"
		})
		.when('/sign_in', {
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

		$authProvider.configure({
		    apiUrl:                	 'http://localhost:3000',        
		    signOutUrl:              '/user/sign_out',
		    emailSignInPath:         '/user/sign_in',
		    emailRegistrationPath:   '/user',
		    accountUpdatePath:       '/user',
		    accountDeletePath:       '/user',
		    passwordResetPath:       '/user/password',
		    passwordUpdatePath:      '/user/password',
		    tokenValidationPath:     '/user/validate_token',
		    confirmationSuccessUrl: function() {
	        	return 'http://localhost:3000';
	      	}
		});
	}
]);