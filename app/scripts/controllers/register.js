'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
  .controller('RegisterCtrl', function ($scope, $location, User) {
    $scope.user = {
      'email': $location.search().email || ''
    };

    $scope.submitForm = function (isValid, user) {
      var newUser;
      if (user.password !== user.confirmPassword) {
        return;
      }
      newUser = angular.copy(user);
      delete newUser.confirmPassword;
      User.create(newUser).then(function () {
        $location.path('/login');
      });
    };
  });
