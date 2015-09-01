'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightCtrl
 */
angular
  .module('flyguyApp')
  .controller('FlightCtrl', function ($scope, $stateParams, Flights) {
    $scope.loadFlight = function () {
      Flights.one($stateParams.id).get().then(function (flight) {
        $scope.flight = flight;
      });
    };
    $scope.loadFlight();
  });
