'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
