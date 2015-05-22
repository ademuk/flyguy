'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
