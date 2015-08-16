'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightsCtrl
 * @description
 * # FlightsCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
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
