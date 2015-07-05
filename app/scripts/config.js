'use strict';

var baseUrl = "http://127.0.0.1:8000/";

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
        RestangularProvider.setBaseUrl(config.baseUrl + 'api');
        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            if (operation === "getList") {
                data = data.results;
            }
            return data;
        });
    });
