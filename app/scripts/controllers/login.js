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
        $scope.logIn = function (user) {
          Session.create(user).then(function () {
            $location.path("/flights");
          });
        };
  });
