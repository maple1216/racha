'use strict';

angular.module('rachaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/grades', {
        templateUrl: 'app/grades/grades.html',
        controller: 'GradesCtrl'
      });
  });
