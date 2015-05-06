'use strict';

angular.module('rachaApp')
  .controller('MainCtrl', function ($scope, $http, socket, $location) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.go = function ( path ) {
      $location.path( path );
    };

    // var item = {
    //   face: '/img/list/60.jpeg',
    //   what: 'Brunch this weekend?',
    //   who: 'Min Li Chan',
    //   notes: "I'll be in your neighborhood doing errands."
    // };
    // $scope.todos = [];
    // for (var i = 0; i < 15; i++) {
    //   $scope.todos.push({
    //     face: '/img/list/60.jpeg',
    //     what: "Brunch this weekend?",
    //     who: "Min Li Chan",
    //     notes: "I'll be in your neighborhood doing errands."
    //   });
    // }
  });

// 'use strict';
//
// angular.module('rachaApp')
//   .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
//     $scope.toggleLeft = buildToggler('left');
//     $scope.toggleRight = buildToggler('right');
//     /**
//      * Build handler to open/close a SideNav; when animation finishes
//      * report completion in console
//      */
//     function buildToggler(navID) {
//       var debounceFn =  $mdUtil.debounce(function(){
//             $mdSidenav(navID)
//               .toggle()
//               .then(function () {
//                 $log.debug("toggle " + navID + " is done");
//               });
//           },300);
//       return debounceFn;
//     }
//   })
//   .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//     $scope.close = function () {
//       $mdSidenav('left').close()
//         .then(function () {
//           $log.debug("close LEFT is done");
//         });
//     };
//   })
//   .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//     $scope.close = function () {
//       $mdSidenav('right').close()
//         .then(function () {
//           $log.debug("close RIGHT is done");
//         });
//     };
//   });
