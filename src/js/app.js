'use strict';
angular.module('portfolioApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // route for the home page
    .state('app', {
      url:'/',
      views: {
		'nav' :{
			templateUrl : 'views/nav.html'
		},
        'header': {
          templateUrl : 'views/header.html'
        },
        'content': {
          templateUrl : 'views/home.html'
        },
        'footer': {
          templateUrl : 'views/footer.html'
        }
      }
    })

	//route for the about page
    .state('app.about', {
      url:'about',
      views: {
		'header@': {
          templateUrl : null
        },
        'content@': {
          templateUrl : 'views/about.html'
        }
      }
    })
	// route for the achiev. page
    .state('app.achievements', {
      url:'achievements',
      views: {
		'header@': {
          templateUrl : null
        },
        'content@': {
          templateUrl : 'views/achievements.html',
          controller  : 'infoController'
        }
      }
    })
      // route for the contact page
    .state('app.contact', {
      url:'contact',
      views: {
		'header@': {
          templateUrl : null
        },
        'content@': {
          templateUrl : 'views/contact.html'
        }
      }
    }) 

	  // route for the contact page
    .state('app.angular', {
      url:'angular',
      views: {
		'header@': {
          templateUrl : null
        },
        'content@': {
          templateUrl : 'views/angular.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}]);