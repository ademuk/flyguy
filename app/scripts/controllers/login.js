'use strict';

/**
 * @ngdoc function
 * @name flyguyApp.controller:LoginCtrl
 * @description
 * # FlightCtrl
 * Controller of the flyguyApp
 */
angular.module('flyguyApp')
    .controller('LoginCtrl', function ($scope, Session) {
        $scope.login = function (user) {
          Session.create(user).then(function (response) {
            console.log(response);
            // $location.path("/flights");
          });
        };
  });
