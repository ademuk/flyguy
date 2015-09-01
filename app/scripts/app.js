'use strict';

/**
 * @ngdoc overview
 * @name flyguyApp
 * @description
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
        url: '/logout',
        controller: 'LogoutCtrl'
      });

    $urlRouterProvider.otherwise('/flights');
  });
