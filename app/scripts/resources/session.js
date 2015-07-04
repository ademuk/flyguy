'use strict'

angular.module('flyguyApp')
    .factory('Session', function($http) {
        class Session {
          create(user) {
            return $http.post('http://127.0.0.1:8000/' + 'api-token-auth/', user)
            .then(this._onLogon.bind(this));
          }

          destroy() {
            this.token = null;
          }

          get loggedIn() {
            return !!this.token;
          }

          _onLogon(response) {
            this.token = reponse.data.token;
            return response.data;
          }
        }
        return Session;
    });
