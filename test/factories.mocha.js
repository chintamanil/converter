describe('sterlingConvert', function() {

  beforeEach(module('ValueService'));

  var ValueService;

  beforeEach(inject(function(_ValueService_) {
    ValueService = _ValueService_;
  }));

  describe('when invoked', function() {

    beforeEach(function() {
      ValueService.parseValue('£1');
    });

    it('should say Ook', function() {
      expect(ValueService.parseValue('£1')).to.equal('100');
    });
  });
});