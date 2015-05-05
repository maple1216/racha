'use strict';

describe('Controller: QueuesCtrl', function () {

  // load the controller's module
  beforeEach(module('rachaApp'));

  var QueuesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueuesCtrl = $controller('QueuesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
