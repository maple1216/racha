'use strict';

angular.module('rachaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('queues/class', {
        templateUrl: 'app/queues/class/class.html',
        controller: 'ClassCtrl'
      });
  });
