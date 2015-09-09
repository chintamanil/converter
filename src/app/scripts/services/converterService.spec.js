(function() {
  'use strict';
var origValue = [
          {
            '$': '1p',
            'val': 0
          }, {
            '$': '2p',
            'val': 0
          }, {
            '$': '50p',
            'val': 0
          }, {
            '$': '£1',
            'val': 0
          }, {
            '$': '£2',
            'val': 0
          }
        ];

  describe('currencyCalculateService', function () {
    var  currencyCalculateService,MY_COINS ;

    beforeEach(angular.mock.module('sterlingConvert'));

    beforeEach(inject(function (_currencyCalculateService_,_MY_COINS_) {
        currencyCalculateService =_currencyCalculateService_;
        MY_COINS = _MY_COINS_;
    }));
    it('check 123', function () {
        expect(currencyCalculateService.originalValue()).to.deepEqual(origValue)
    });

});


})();


