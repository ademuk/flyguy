'use strict';

describe('User', function () {

  var baseUrl = 'http://fooaddress/',
      userPayload = {
        'email': 'foo@bar.com',
        'password': 'fooPassword',
        'firstName': 'foo',
        'lastName': 'bar'
      },
      $rootScope,
      $q,
      User,
      mockHttp,
      mockResponse = {
        
      },
      postDeferred;

  beforeEach(module('flyguyApp'));

  beforeEach(module(function ($provide) {
    mockHttp = {
      'post': function () {}
    };
    $provide.value('$http', mockHttp);
    $provide.constant('config', {
      'baseUrl': baseUrl
    });
  }));

  beforeEach(inject(function (_$rootScope_, _$q_, _User_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    User = _User_;

    postDeferred = $q.defer();
    sinon.stub(mockHttp, 'post').returns(postDeferred.promise);
  }));

  beforeEach(inject(function (_User_) {
    User = _User_;
  }));

  it('create user calls correct endpoint', function () {
    User.create(userPayload);
    postDeferred.resolve(mockResponse);
    expect(mockHttp.post.calledOnce).toEqual(true);
    expect(mockHttp.post.calledWith(baseUrl + 'user/', userPayload))
      .toEqual(true);
  });

});
