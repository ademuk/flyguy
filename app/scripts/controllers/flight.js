'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightCtrl
 * @description
 * # FlightCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('FlightCtrl', function ($scope, $routeParams, Flights) {
        $scope.loadFlight = function () {
            Flights.one($routeParams.flightId).get().then(function (flight) {
                $scope.flight = flight;
            });
        };
        $scope.loadFlight();
  });
