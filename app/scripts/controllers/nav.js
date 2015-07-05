'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('NavCtrl', function ($scope, $location, Session) {
    $scope.session = Session;
    $scope.logOut = function () {
      Session.destroy();
      $location.path('/login');
    };
  });
