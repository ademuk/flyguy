'use strict';

describe('FlightCtrl', function () {

  // load the controller's module
  beforeEach(module('flyguyApp'));

  var $q,
      $rootScope,
      $scope,
      mockFlights,
      mockFlightResponse = {
        'url': 'http://foo.bar/api/flights/1',
        'name': 'Flight 1',
        'date': '2015-05-05',
        'notes': 'Notes'
      },
      queryDeferred;

  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function ($controller) {
    $scope = $rootScope.$new();

    mockFlights = {
      one: function () {
        queryDeferred = $q.defer();
        return {
          get: function () { return queryDeferred.promise; }
        };
      }
    };

    spyOn(mockFlights, 'one').and.callThrough();

    $controller('FlightCtrl', {
      $scope: $scope,
      $stateParams: {
        id: '1',
      },
      'Flights': mockFlights
    });
  }));

  beforeEach(function () {
    queryDeferred.resolve(mockFlightResponse);
    $rootScope.$apply();
  });

  it('should load flight', function () {
    expect(mockFlights.one).toHaveBeenCalledWith('1');
  });

  it('should load flight into scope', function () {
    expect($scope.flight).toEqual(mockFlightResponse);
  });
});
