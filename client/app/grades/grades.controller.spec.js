'use strict';

describe('Controller: GradesCtrl', function () {

  // load the controller's module
  beforeEach(module('rachaApp'));

  var GradesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GradesCtrl = $controller('GradesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
