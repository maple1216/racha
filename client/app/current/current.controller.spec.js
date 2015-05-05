'use strict';

describe('Controller: CurrentCtrl', function () {

  // load the controller's module
  beforeEach(module('rachaApp'));

  var CurrentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentCtrl = $controller('CurrentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
