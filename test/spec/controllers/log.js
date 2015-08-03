'use strict';

describe('LogCtrl', function () {

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
        queryDeferred;

    beforeEach(inject(function(_$q_, _$rootScope_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(inject(function ($controller) {
        $scope = $rootScope.$new();

        mockFlights = {
            post: function () {
                queryDeferred = $q.defer();
                return queryDeferred.promise;
            }
        };

        spyOn(mockFlights, 'post').and.callThrough();

        $controller('LogCtrl', {
            $scope: $scope,
            'Flights': mockFlights
        });
    }));

    it('should post flight on log form submit', function () {
        $scope.log({
            'name': 'foo',
            'date': new Date(2015, 2, 1),
            'notes': 'Notes\nBar'
        });

        queryDeferred.resolve(mockFlightsResponse);
        $rootScope.$apply();

        expect(mockFlights.post).toHaveBeenCalledWith({
            'name': 'foo',
            'date': '2015-03-01',
            'notes': 'Notes\nBar'
        });
    });
});
