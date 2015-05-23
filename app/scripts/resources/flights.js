angular.module('flyguyApp')
    .service('Flights', ['Restangular', function(Restangular) {
        return Restangular.service('flights');
    }]);