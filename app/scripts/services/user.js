'use strict';

/**
 * @ngdoc service
 * @name flyguyApp.User
 */
angular
  .module('flyguyApp')
  .factory('User', function (config, $http) {

    function User() {}

    User.prototype.create = function(user) {
      return $http.post(config.baseUrl + 'users/', user)
                  .then(this._onCreate.bind(this));
    };

    User.prototype._onCreate = function(response) {
      return response.data;
    };

    return new User();
  });
