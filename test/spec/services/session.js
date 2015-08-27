'use strict';

describe('Session', function () {
  var baseUrl = 'http://fooaddress/',
      $rootScope,
      $q,
      Session,
      mockHttp,
      postDeferred,
      btoa = window.btoa,
      stringify = JSON.stringify,
      userPayload = {
        'username': 'fooUsername',
        'password': 'fooPassword'
      },
      generateToken = function (claims) {
        return btoa(stringify({'typ': 'JWT', 'alg': 'HS256'})) + '.' + btoa(stringify(claims)) + '.signature';
      },
      generateResponse = function (claims) {
        claims = claims || {};
        return {
          'data': {
            'token': generateToken(claims)
          }
        };
      };

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
    postDeferred.resolve(generateResponse());
    expect(mockHttp.post.calledOnce).toEqual(true);
    expect(mockHttp.post.calledWith(baseUrl + 'token-auth/', userPayload))
      .toEqual(true);
  });

  it('session does not exist by default', function () {
    expect(Session.exists()).toEqual(false);
  });

  it('session does not exist if expired', function () {
    var timeInPast = (new Date() - 999),
      claims = {
        'iat': (new Date() - 9999) / 1000,
        'exp': timeInPast / 1000
      };
    Session.create(userPayload);
    postDeferred.resolve(generateResponse(claims));
    $rootScope.$digest();

    expect(Session.exists()).toEqual(false);
  });

  it('session exists after it\'s created', function () {
    var timeInFuture = new Date().valueOf() + 999,
      claims = {
        'iat': (new Date() - 9999) / 1000,
        'exp': timeInFuture / 1000
      };
    Session.create(userPayload);
    postDeferred.resolve(generateResponse(claims));
    $rootScope.$digest();

    expect(Session.exists()).toEqual(true);
  });

  it('destroy removes session', function () {
    Session.create(userPayload);
    postDeferred.resolve(generateResponse());
    $rootScope.$digest();

    Session.destroy();

    expect(Session.exists()).toEqual(false);
  });
});
