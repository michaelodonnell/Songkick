'use strict';


// Declare app level module which depends on filters, and services
var songKickApp = angular.module('songKickApp', [
  'ngRoute',
  'ngResource',
  'songKickControllers',
  'songKickFilters',
  'songKickServices',
  'ngBootstrap'
]);

songKickApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/view1', {
        templateUrl: 'partials/partial1.html',
        controller: 'ConcertListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/partial2.html',
        controller: 'ConcertListCtrl'
      }).
      otherwise({
        redirectTo: '/view1'
      });
  }]);