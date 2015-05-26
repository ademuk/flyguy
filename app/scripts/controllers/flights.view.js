'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightsViewCtrl
 * @description
 * # FlightsViewCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('FlightsViewCtrl', function ($scope, $stateParams, Flights) {
        $scope.loadFlight = function () {
            Flights.one($stateParams.id).get().then(function (flight) {
                $scope.flight = flight;
            });
        };
        $scope.loadFlight();
  });
