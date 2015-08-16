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
                'url': 'http://foo.bar/api/flights/1',
                'name': 'Flight 1',
                'date': '2015-05-05',
                'notes': 'Notes'
            }
        ],
        getMockFlights = function () {
            var mockFlights = {
                getList: function () {
                    queryDeferred = $q.defer();
                    return queryDeferred.promise;
                }
            };

            spyOn(mockFlights, 'getList').and.callThrough();

            return mockFlights;
        },
        queryDeferred;

    beforeEach(inject(function(_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe('with user session', function () {
        beforeEach(inject(function ($controller) {
            $scope = $rootScope.$new();

            mockFlights = getMockFlights();

            $controller('FlightsCtrl', {
                $scope: $scope,
                'Flights': mockFlights,
                'Session': {
                    exists: function () {
                        return true;
                    }
                }
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

    describe('without a user session', function () {
        beforeEach(inject(function ($controller) {
            $scope = $rootScope.$new();

            mockFlights = getMockFlights();

            $controller('FlightsCtrl', {
                $scope: $scope,
                'Flights': mockFlights,
                'Session': {
                    exists: function () {
                        return false;
                    }
                }
            });
        }));

        beforeEach(function () {
            queryDeferred.resolve(mockFlightsResponse);
            $rootScope.$apply();
        });

        it('should not load flights', function () {
            expect(mockFlights.getList).not.toHaveBeenCalled();
        });

        it('should load no flights into scope', function () {
            expect($scope.flights.length).toEqual(0);
        });
    });

});
