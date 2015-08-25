'use strict';

describe('RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('flyguyApp'));

  var $rootScope, $scope, locationMock, userCreateDeferred, UserMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, _$rootScope_) {
    userCreateDeferred = $q.defer();
    UserMock = {
      'create': sinon.stub().returns(userCreateDeferred.promise)
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

  it('creates user', function () {
    $scope.submitForm(true, {
      'username': 'foo@bar.com',
      'password': 'foo',
      'confirmPassword': 'foo'
    });

    expect(UserMock.create.calledWith({
      'username': 'foo@bar.com',
      'password': 'foo'
    })).toEqual(true);
  });

  it('redirects to login after registration', function () {
    $scope.submitForm(true, {
      'username': 'foo@bar.com',
      'password': 'foo',
      'confirmPassword': 'foo'
    });

    userCreateDeferred.resolve();
    $rootScope.$digest();

    expect(locationMock.path.calledWith('/login')).toEqual(true);
  });

  it('user is not created if passwords do not match', function () {
    $scope.submitForm(true, {
      'username': 'foo@bar.com',
      'password': 'foo',
      'confirmPassword': 'bar'
    });

    expect(UserMock.create.called).toBe(false);
  });
});
