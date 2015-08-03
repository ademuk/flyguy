'use strict';

describe('Session', function () {
  var baseUrl = 'http://fooaddress/',
      userPayload = {
        'username': 'fooUsername',
        'password': 'fooPassword'
      },
      $rootScope,
      $q,
      Session,
      mockHttp,
      mockResponse = {
        'data': {
          'token': 'fooToken'
        }
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

  beforeEach(inject(function (_$rootScope_, _$q_, _Session_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    Session = _Session_;

    postDeferred = $q.defer();
    sinon.stub(mockHttp, 'post').returns(postDeferred.promise);
  }));

  it('create session calls correct endpoint', function () {
    Session.create(userPayload);
    postDeferred.resolve(mockResponse);
    expect(mockHttp.post.calledOnce).toEqual(true);
    expect(mockHttp.post.calledWith(baseUrl + 'api-token-auth/', userPayload))
      .toEqual(true);
  });

  it('session does not exists by default', function () {
    expect(Session.exists()).toEqual(false);
  });

  it('session exists after it\'s created', function () {
    Session.create(userPayload);
    postDeferred.resolve(mockResponse);
    $rootScope.$digest();

    expect(Session.exists()).toEqual(true);
  });

  it('destroy removes session', function () {
    Session.create(userPayload);
    postDeferred.resolve(mockResponse);
    $rootScope.$digest();

    Session.destroy();

    expect(Session.exists()).toEqual(false);
  });
});
