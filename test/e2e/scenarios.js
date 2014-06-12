'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('SongKick App', function() {

  describe('Concert list view', function() {

    beforeEach(function() {
      browser.get('/app/index.html#/view1');
    });

    it('should filter the concert list as user types into the search box', function() {

      var concertList = element.all(by.repeater('concert in concerts'));
      var query = element(by.model('query'));

      expect(concertList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(concertList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(concertList.count()).toBe(8);
    });
  });
});
