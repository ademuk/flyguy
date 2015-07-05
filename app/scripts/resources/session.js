'use strict'

angular.module('flyguyApp')
    .factory('Session', function(config, $http) {
        function Session () {};
        Session.prototype = {
          create: function(user) {
            return $http.post(config.baseUrl + 'api-token-auth/', user)
              .then(this._onLogon.bind(this));
          },

          destroy: function() {
            this.token = null;
          },

          exists: function() {
            return !!this.token;
          },

          _onLogon: function(response) {
            this.token = response.data.token;
            return response.data;
          }
        };

        return new Session();
    });
