'use strict';

describe('LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('flyguyApp'));

  var $rootScope, $scope, locationMock, sessionCreateDeferred, SessionMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, _$rootScope_) {
    sessionCreateDeferred = $q.defer();
    SessionMock = {
      'create': sinon.stub().returns(sessionCreateDeferred.promise)
    };

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    locationMock = {
      'path': sinon.stub().returns({
        'search': sinon.stub()
      })
    };
    $controller('LoginCtrl', {
      $scope: $scope,
      $location: locationMock,
      'Session': SessionMock
    });
  }));

  it('creates session', function () {
    $scope.hasAccount = true;
    $scope.submitForm(true, {
      'email': 'foo',
      'password': 'bar'
    });

    expect(SessionMock.create.calledWith({
      'email': 'foo',
      'password': 'bar'
    })).toEqual(true);
  });

  it('redirects to flights after login', function () {
    $scope.hasAccount = true;
    $scope.submitForm(true, {
      'email': 'foo',
      'password': 'bar'
    });

    sessionCreateDeferred.resolve();
    $rootScope.$digest();
    expect(locationMock.path.calledWith('/flights')).toEqual(true);
  });

  it('redirects to register page if user does not have an account', function () {
    $scope.hasAccount = false;
    $scope.submitForm(true, {
      'email': 'foo@bar.com'
    });

    sessionCreateDeferred.resolve();
    $rootScope.$digest();

    expect(locationMock.path.calledWith('/register')).toEqual(true);
    expect(locationMock.path().search.calledWith({
      'email': 'foo@bar.com'
    })).toEqual(true);
  });
});
