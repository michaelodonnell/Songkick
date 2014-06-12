'use strict';

/* Services */

var songKickServices = angular.module('songKickServices', ['ngResource']);

songKickServices.factory('SongKick', ['$resource',
  function($resource){
    return $resource('songkick/:resultsPage.json', {}, {
      query: {method:'GET', params:{resultsPage:'concerts'}, isArray:true}
    });
  }]);