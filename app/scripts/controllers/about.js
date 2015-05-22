'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
