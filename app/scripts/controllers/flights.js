'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightsCtrl
 * @description
 * # FlightsCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('FlightsCtrl', function ($scope, Flights) {
        $scope.loadFlights = function () {
            Flights.getList({full: true, limit: 10}).then(function (flights) {
              $scope.flights = flights;
            });
        }
        $scope.loadFlights();
  });
