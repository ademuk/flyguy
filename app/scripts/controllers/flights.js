'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:FlightsCtrl
 * @description
 * # FlightsCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('FlightsCtrl', function ($scope) {
    $scope.flights = [
      'Flight 1',
      'Flight 2',
      'Flight 3'
    ];
  });
