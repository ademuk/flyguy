'use strict';

var baseUrl = 'http://flyguy-service.appyharry.com/api/';

/**
 * @ngdoc overview
 * @name flyguyApp
 * @description
 * # flyguyApp
 *
 * Config module of the application.
 */
angular.module('flyguyApp')
    .constant('config', {
        baseUrl: baseUrl
    });

angular.module('flyguyApp').config(function(RestangularProvider, config) {
        RestangularProvider.setBaseUrl(config.baseUrl);
        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.addResponseInterceptor(function(data, operation) {
            if (operation === 'getList') {
                data = data.results;
            }
            return data;
        });
    });
