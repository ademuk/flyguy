'use strict';

/**
 * @ngdoc service
 * @name flyguyApp.Flights
 */
angular
  .module('flyguyApp')
  .factory('Flights', function(Restangular) {
    return Restangular.service('flights');
  });
