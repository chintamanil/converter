(function() {
  'use strict';

  describe('ValueService', function () {
    var  ValueService;

    beforeEach(angular.mock.module('sterlingConvert'));

    beforeEach(inject(function (_ValueService_) {
        ValueService =_ValueService_;
    }));
    it('check 123', function () {
        expect(ValueService.parseValue('123')).to.equals('123')
    });
    it('check £12', function () {
        expect(ValueService.parseValue('£12')).to.equals('1200')
    });
    it('check £1.2p', function () {
        expect(ValueService.parseValue('£1.2p')).to.equals('120')
    });
    it('check £12p', function () {
        expect(ValueService.parseValue('12p')).to.equals('12')
    });
    it('check 12p', function () {
        expect(ValueService.parseValue('12p')).to.equals('12')
    });
    it('check 1.2p', function () {
        expect(ValueService.parseValue('1.2p')).to.equals('120')
    });

});


})();


