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
    }
    
    $scope.submitForm = function (isValid, user) {
      User.create(user).then(function () {
        $location.path('/login');
      });
    };
  });
