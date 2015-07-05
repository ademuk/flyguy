'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('NavCtrl', function ($scope, Session) {
    $scope.session = Session;
  });
