'use strict';

describe('FlightsCtrl', function () {

    // load the controller's module
    beforeEach(module('flyguyApp'));

    var $q,
        $rootScope,
        $scope,
        mockFlights,
        mockFlightsResponse = [
            {
                "url": "http://foo.bar/api/flights/1",
                "name": "Flight 1",
                "date": "2015-05-05",
                "notes": "Notes"
            }
        ],
        queryDeferred;

    beforeEach(inject(function(_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(inject(function ($controller) {
        $scope = $rootScope.$new();

        mockFlights = {
            getList: function () {
                queryDeferred = $q.defer();
                return queryDeferred.promise
            }
        };

        spyOn(mockFlights, 'getList').and.callThrough();

        $controller('FlightsCtrl', {
            $scope: $scope,
            'Flights': mockFlights
        });
    }));

    beforeEach(function () {
        queryDeferred.resolve(mockFlightsResponse);
        $rootScope.$apply();
    });

    it('should load flights', function () {
        expect(mockFlights.getList).toHaveBeenCalled();
    });

    it('should load flights into scope', function () {
        expect($scope.flights.length).toEqual(1);
    });
});
