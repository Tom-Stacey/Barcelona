'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('barcelonaApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of amenities to the scope', function () {
    expect(AboutCtrl.amenities.length).toBe(4);
  });
});
