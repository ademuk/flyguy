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

        $scope.flights = [
            {
                id: "1",
                name: "Flight 1",
                "date": "2015-05-07T23:00:00.000Z",
                "notes": "Nootes"
            },
            {
                id: "2",
                name: "Flight 2",
                "date": "2015-05-07T23:00:00.000Z",
                "notes": "Nooftes"
            },
            {
                id: "1",
                name: "Flight 3",
                "date": "2015-05-07T23:00:00.000Z",
                "notes": "Nodotes"
            },
        ];
  });
