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
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).when('/flights', {
        templateUrl: 'views/flights.html',
        controller: 'FlightsCtrl'
      }).when('/log', {
        templateUrl: 'views/log.html',
        controller: 'LogCtrl'
      })
  });