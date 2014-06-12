'use strict';

/* jasmine specs for controllers go here */

describe('ConcertListCtrl', function(){
    var scope, ctrl, $httpBackend;

    // Load our app module definition before each test.
    beforeEach(module('songKickApp'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.songkick.com/api/3.0/events.json?apikey=2zTp3T1kEaz0aT1k&location=ip:82.124.24.137').
          respond([{city: 'Paris, France'}, {city: 'Paris, France'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ConcertListCtrl', {$scope: scope});
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.concerts).toBeUndefined();
      $httpBackend.flush();
      expect(scope.concerts).toEqual([{city: 'Paris, France'}, {city: 'Paris, France'}]);
    });
});