'use strict';

angular.module('rachaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('grades/class', {
        templateUrl: 'app/grades/class/class.html',
        controller: 'ClassCtrl'
      });
  });
