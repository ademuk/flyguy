'use strict';

angular.module('flyguyApp')
  .factory('Session', function(config, $http, jwtHelper) {

    function Session () {
      if (localStorage.getItem('sessionToken')) {
        this._setToken(localStorage.getItem('sessionToken'));
      }
    }

    Session.prototype = {
      create: function(user) {
        return $http.post(config.baseUrl + 'token-auth/', user)
          .then(this._onCreate.bind(this));
      },

      destroy: function() {
        this._setToken(null);
      },

      exists: function() {
        if (!this.token) {
          return false;
        }
        return !jwtHelper.isTokenExpired(this.token);
      },

      _setToken: function (value) {
        this.token = value;
        if (value) {
          localStorage.setItem('sessionToken', value);
        } else {
          localStorage.removeItem('sessionToken');
        }
      },

      _onCreate: function(response) {
        this._setToken(response.data.token);
        return response.data;
      }
    };

    return new Session();
  });
