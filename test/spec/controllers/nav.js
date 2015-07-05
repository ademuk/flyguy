'use strict'

describe('NavCtrl', function () {
  beforeEach(module('flyguyApp'));

  var $rootScope, $scope, SessionMock, locationMock;

  beforeEach(inject(function ($q, $controller, _$rootScope_) {
    SessionMock = {
      'destroy': sinon.stub()
    };

    locationMock = {
      'path': sinon.stub()
    }

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();

    $controller('NavCtrl', {
      $scope: $scope,
      $location: locationMock,
      'Session': SessionMock
    });
  }));

  it('logout destroys session', function () {
    $scope.logOut();

    expect(SessionMock.destroy.calledOnce).toEqual(true);
    expect(locationMock.path.calledWith('/login')).toEqual(true);
  });

});
