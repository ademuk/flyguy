'use strict';

/**
 * @ngdoc overview
 * @name flyguyApp
 * @description
 * # flyguyApp
 *
 * Config module of the application.
 */
angular.module('flyguyApp')
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://127.0.0.1:8000/api');
        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
          if (operation === "getList") {
            data = data.results;
          }
          return data;
        });
    });