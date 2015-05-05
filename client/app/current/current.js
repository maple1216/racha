'use strict';

angular.module('rachaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/current', {
        templateUrl: 'app/current/current.html',
        controller: 'CurrentCtrl'
      });
  });
