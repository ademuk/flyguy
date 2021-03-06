'use strict';

var baseUrl = 'http://flyguy-service.appyharry.com/api/';

/**
 * @ngdoc overview
 * @name flyguyApp
 * @description
 * Config module of the application.
 */
angular
  .module('flyguyApp')
  .constant('config', {
    baseUrl: baseUrl
  })
  .config(function(RestangularProvider, jwtInterceptorProvider, $httpProvider, config) {
    RestangularProvider.setBaseUrl(config.baseUrl);
    RestangularProvider.setRequestSuffix('/');
    RestangularProvider.addResponseInterceptor(function(data, operation) {
      if (operation === 'getList') {
        data = data.results;
      }
      return data;
    });

    jwtInterceptorProvider.authPrefix = 'JWT ';
    // Please note we're annotating the function so that the $injector works when the file is minified
    jwtInterceptorProvider.tokenGetter = ['Session', function(Session) {
      return Session.token;
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
  });
