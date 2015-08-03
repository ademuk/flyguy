'use strict';

angular.module('flyguyApp')
  .factory('Session', function(config, $http) {

    function Session () {
      if (localStorage.getItem('sessionToken')) {
        this._setToken(localStorage.getItem('sessionToken'));
      }
    }

    Session.prototype = {
      create: function(user) {
        return $http.post(config.baseUrl + 'api-token-auth/', user)
          .then(this._onLogon.bind(this));
      },

      destroy: function() {
        this._setToken(null);
      },

      exists: function() {
        return !!this.token;
      },

      _setToken: function (value) {
        this.token = value;
        if (value) {
          localStorage.setItem('sessionToken', value);
        } else {
          localStorage.removeItem('sessionToken');
        }
      },

      _onLogon: function(response) {
        this._setToken(response.data.token);
        return response.data;
      }
    };

    return new Session();
  });
