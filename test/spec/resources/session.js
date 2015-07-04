'use strict';

describe('Session', function () {
  var Session;

  beforeEach(module('flyguyApp'));

  beforeEach(inject(function (_Session_) {
    Session = _Session_;
  }));

  beforeEach(function () {
    var mockHttp = {
      post: function () {
        console.log(1);
      }
    };
    module(function ($provide) {
      $provide.value('$http', mockHttp);
    });
  });

  it('create session', function () {
    Session.create();
  });
});
