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
        RestangularProvider.setBaseUrl('/api/v1');
    });