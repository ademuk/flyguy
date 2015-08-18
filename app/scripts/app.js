'use strict';

/**
 * @ngdoc overview
 * @name flyguyApp
 * @description
 * # flyguyApp
 *
 * Main module of the application.
 */
angular
    .module('flyguyApp', [
        'ngAria',
        'ngTouch',
        'restangular',
        'ui.router',
        'angular-jwt'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('flights', {
                url: '/flights',
                templateUrl: 'views/flights.html',
                controller: 'FlightsCtrl'
            })
            .state('flight', {
                url: '/flight/:id',
                templateUrl: 'views/flight.html',
                controller: 'FlightCtrl'
            })
            .state('log', {
                url: '/log',
                templateUrl: 'views/log.html',
                controller: 'LogCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('logout', {
                url: '/login',
                templateUrl: 'views/logout.html',
                controller: 'LogoutCtrl'
            });

        $urlRouterProvider.otherwise('/flights');
    })
    .config(function Config($httpProvider, jwtInterceptorProvider) {
      jwtInterceptorProvider.authPrefix = 'JWT ';
      // Please note we're annotating the function so that the $injector works when the file is minified
      jwtInterceptorProvider.tokenGetter = ['Session', function(Session) {
          return Session.token;
      }];

      $httpProvider.interceptors.push('jwtInterceptor');
    });
