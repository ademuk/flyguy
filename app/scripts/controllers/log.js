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
        $scope.log = function(flight) {
            var newFlight = angular.copy(flight);
            newFlight.date = $filter('date')(newFlight.date, 'yyyy-MM-dd');
            Flights.post(newFlight).then(function () {
                $location.path("/flights");
            });
        };
    });
