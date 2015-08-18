'use strict';

describe('RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('flyguyApp'));

  var $rootScope, $scope, locationMock, userCreateDeferred, UserMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, _$rootScope_) {
    userCreateDeferred = $q.defer();
    UserMock = {
      'create': function () {
        return userCreateDeferred.promise;
      }
    };

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    locationMock = {
      'path': sinon.stub(),
      'search': function () {
        return {
          'email': 'foo@bar.com'
        };
      }
    };
    $controller('RegisterCtrl', {
      $scope: $scope,
      $location: locationMock,
      'User': UserMock
    });
  }));

  it('user email defaults to email query param', function () {
    expect($scope.user.email).toEqual(locationMock.search().email);
  });

  it('redirects to login after registration', function () {
    $scope.submitForm(true, {

    });

    userCreateDeferred.resolve();
    $rootScope.$digest();

    expect(locationMock.path.calledWith('/login')).toEqual(true);
  });
});
