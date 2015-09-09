
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

        it('12p testing', function() {
        var res = new ValueService();
        expect(res.parseValue("12p")).to.equals('12');
      });
   });
 });




