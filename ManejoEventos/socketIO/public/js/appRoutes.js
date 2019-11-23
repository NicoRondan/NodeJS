angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			
			templateUrl: 'views/chat.html',
			
		})

		.when('/room/:valor', {
			templateUrl: 'views/room.html',
			controller: 'chatController'
		})
		;

	$locationProvider.html5Mode(true);

}]);