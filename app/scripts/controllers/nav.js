'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:NavCtrl
 */
angular
  .module('flyguyApp')
  .controller('NavCtrl', function ($scope, $location, Session) {
    $scope.session = Session;
    $scope.logOut = function () {
      Session.destroy();
      $location.path('/login');
    };
  });
