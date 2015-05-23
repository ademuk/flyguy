'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:LogCtrl
 * @description
 * # LogCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('LogCtrl', function ($scope, $location, Flights) {
        $scope.master = {};

        $scope.update = function(user) {
            Flights.post(user).then(function () {
                $location.path("/flights");
            });
        };
    });
