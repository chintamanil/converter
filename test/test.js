
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("Service test", function() {
   describe("Different input values", function () {

      it('£ testing1', function() {
        var res = new ValueService();
        expect(res.parseValue("£1")).to.equals('100');
      });

      it('£ testing2', function() {
        var res = new ValueService();
        expect(res.parseValue("£1.1p")).to.equals('110');
      });

     it('p testing1', function() {
        var res = new ValueService();
        expect(res.parseValue("1.1p")).to.equals('110');
      });

     it('p testing2', function() {
        var res = new ValueService();
        expect(res.parseValue("1.17777p")).to.equals('118');
      });

      it('p testing3', function() {
        var res = new ValueService();
        expect(res.parseValue("0.17777p")).to.equals(false);
      });

     it('p testing3', function() {
        var res = new ValueService();
        expect(res.parseValue("123")).to.equals('123');
      });

   });
 });





