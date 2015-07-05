'use strict';

describe('LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('flyguyApp'));

  var $rootScope, $scope, locationMock, sessionCreateDeferred, SessionMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, _$rootScope_) {
    sessionCreateDeferred = $q.defer();
    SessionMock = {
      'create': function () {
        return sessionCreateDeferred.promise;
      }
    };

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    locationMock = {
      'path': sinon.stub()
    }
    $controller('LoginCtrl', {
      $scope: $scope,
      $location: locationMock,
      'Session': SessionMock
    });
  }));

  it('redirects to flights after login', function () {
    $scope.logIn({
      'username': 'foo',
      'password': 'bar'
    });

    sessionCreateDeferred.resolve();
    $rootScope.$digest();

    expect(locationMock.path.calledWith('/flights')).toEqual(true);
  });
});
