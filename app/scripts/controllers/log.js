'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('LogCtrl', function ($scope, $location, $filter, Flights) {
        $scope.submitForm = function(isValid, flight) {
          var newFlight;
          if (!isValid) {
            return;
          }
          newFlight = angular.copy(flight);
          newFlight.date = $filter('date')(newFlight.date, 'yyyy-MM-dd');
          Flights.post(newFlight).then(function () {
              $location.path('/flights');
          });
        };
    });
