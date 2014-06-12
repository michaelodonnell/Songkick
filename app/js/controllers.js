'use strict';

/* Controllers */

var songKickControllers = angular.module('songKickControllers', []);

songKickControllers.controller('ConcertListCtrl', ['$scope', '$http',

  	function ($scope, $http) {
	  	$scope.APIKey = '2zTp3T1kEaz0aT1k';
	  	$scope.selectedLocation = '82.124.24.137';

	    $http.get('https://api.songkick.com/api/3.0/search/locations.json?location=clientip&apikey=' + $scope.APIKey).success(function(data) {
	    $scope.locations = data;
    });

    var updateConcerts = function() {
    	$http.get('https://api.songkick.com/api/3.0/events.json?apikey=' + $scope.APIKey + '&location=ip:' + $scope.selectedLocation + '&min_date=max_date=').success(function(data) {
	    	$scope.concerts = data;
	    });
    }

    var updateDateRange = function() {
      // alert($scope.dateRange.startDate);

      // Parse the start and end dates:
      if(typeof $scope.dateRange.startDate != "undefined") {
        var month = $scope.dateRange.startDate.getUTCMonth();
        var day = $scope.dateRange.startDate.getUTCDate();
        var year = $scope.dateRange.startDate.getUTCFullYear();

        alert(year + "/" + month + "/" + day);
      }
      
      // $scope.dateRange.startDate.split("T").
    }

    $scope.$watch('selectedLocation', updateConcerts);
    $scope.$watch('dateRange', updateDateRange);

    $scope.orderProp = 'popularity';

  }]);