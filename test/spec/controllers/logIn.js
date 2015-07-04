'use strict';

describe('LogInCtrl', function () {

    // load the controller's module
    beforeEach(module('flyguyApp'));

    var $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('LogInCtrl', {
            $scope: $scope,
        });
    }));

    it('should load flights', function () {

    });
});
