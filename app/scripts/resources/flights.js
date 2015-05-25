angular.module('flyguyApp')
    .factory('Flights', function(Restangular) {
        return Restangular.service('flights');
    });