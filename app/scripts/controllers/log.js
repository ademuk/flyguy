'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:LogCtrl
 */
angular
  .module('flyguyApp')
  .controller('LogCtrl', function ($scope, $location, $filter, Flights, Session) {
    $scope.session = Session.exists();

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
