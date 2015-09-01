'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightsCtrl
 */
angular
  .module('flyguyApp')
  .controller('FlightsCtrl', function ($scope, Flights, Session) {
    $scope.flights = [];

    $scope.loadFlights = function () {
      Flights.getList().then(function (flights) {
        $scope.flights = flights;
      });
    };

    if (Session.exists()) {
      $scope.loadFlights();
    }
  });
