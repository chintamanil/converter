(function() {
  'use strict';
var origValue =    [{'$': '1p', 'val': 0}, {'$': '2p', 'val': 0}, {'$': '50p', 'val': 0}, {'$': '£1', 'val': 0}, {'$': '£2', 'val': 0}];
var actualValue1 = [{'$': '£2', 'val': 4}, {'$': '£1', 'val': 1}, {'$': '50p', 'val': 1}, {'$': '2p', 'val': 1}, {'$': '1p', 'val': 1}];
var actualValue2 = [{'$': '£2', 'val': 0}, {'$': '£1', 'val': 0}, {'$': '50p', 'val': 1}, {'$': '2p', 'val': 3}, {'$': '1p', 'val': 1}];


  describe('currencyCalculateService', function () {
    var  currencyCalculateService,MY_COINS ;

    beforeEach(angular.mock.module('sterlingConvert'));

    beforeEach(inject(function (_currencyCalculateService_,_MY_COINS_) {
        currencyCalculateService =_currencyCalculateService_;
        MY_COINS = _MY_COINS_;
    }));

    describe('when invoked', function() {

        beforeEach(function() {
            currencyCalculateService.originalValue();
        });

        it('check for 57', function () {
            expect(currencyCalculateService.actualValue('57')).to.eql(actualValue2);
        });

        it('check for 953', function () {
            expect(currencyCalculateService.actualValue('953')).to.eql(actualValue1);
        });

         it('check original value', function () {
            console.log(currencyCalculateService.originalValue());
            expect(currencyCalculateService.originalValue()).to.eql(origValue);
        });


    });


});


})();


