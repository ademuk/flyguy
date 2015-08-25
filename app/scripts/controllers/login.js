'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('LoginCtrl', function ($scope, $location, Session) {
    $scope.submitForm = function (isValid, user) {
      if (!isValid) {
        return;
      }
      if (!$scope.hasAccount) {
        $location.path('/register').search({email: user.email});
        return;
      }
      Session.create(user).then(function () {
        $location.path('/flights');
      });
    };
  });
