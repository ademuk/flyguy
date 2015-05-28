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
        'ngSanitize',
        'ngTouch',
        'restangular',
        'ui.router'
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
            });

        $urlRouterProvider.otherwise("/flights");
    });
