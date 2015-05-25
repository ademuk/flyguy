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
        RestangularProvider.addRequestInterceptor(function (element, operation, what, url) {
            if (!element) {
                return;
            }
            Object.keys(element).forEach(function (key) {
                if (element[key] instanceof Date) {
                    var date = element[key];
                    element[key] = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
                }
            });

            return element;
        });
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
          if (operation === "getList") {
            data = data.results;
          }
          return data;
        });
    });