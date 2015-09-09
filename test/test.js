
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("Service test for checknig input values ", function() {
   describe("Different input values", function () {

      it('£1 testing', function() {
        var res = new ValueService();
        expect(res.parseValue("£1")).to.equals('100');
      });

      it('£1.1p testing', function() {
        var res = new ValueService();
        expect(res.parseValue("£1.1p")).to.equals('110');
      });

     it('1.1p testing', function() {
        var res = new ValueService();
        expect(res.parseValue("1.1p")).to.equals('110');
      });

     it('1.7777p testing', function() {
        var res = new ValueService();
        expect(res.parseValue("1.17777p")).to.equals('118');
      });

      it('0.1777p testing3', function() {
        var res = new ValueService();
        expect(res.parseValue("0.17777p")).to.equals(false);
      });

     it('123 testing', function() {
        var res = new ValueService();
        expect(res.parseValue("123")).to.equals('123');
      });

   });
 });

describe('factories', function() {

  beforeEach(module('factories'));

  var chimp;
  var $log;

  beforeEach(inject(function(_chimp_, _$log_) {
    chimp = _chimp_;
    $log = _$log_;
    sinon.stub($log, 'warn', function() {});
  }));

  describe('when invoked', function() {

    beforeEach(function() {
      chimp.ook();
    });

    it('should say Ook', function() {
      expect($log.warn.callCount).to.equal(1);
      expect($log.warn.args[0][0]).to.equal('Ook.');
    });
  });
});



