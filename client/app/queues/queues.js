'use strict';

angular.module('rachaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/queues', {
        templateUrl: 'app/queues/queues.html',
        controller: 'QueuesCtrl'
      });
  });
