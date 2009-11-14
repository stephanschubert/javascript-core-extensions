Screw.Unit(function() {

  describe("returning", function() {

    it("should return the given object", function() {
      expect(returning(null)).to(equal, null);
      expect(returning(true)).to(equal, true);
      expect(returning(false)).to(equal, false);
      expect(returning([1,2,3])).to(equal, [1,2,3]);
      // ...
    });

    it("should pass the given object to a function", function() {
      var push_1 = function(array) { array.push(1); };
      expect(returning([], push_1)).to(equal, [1]);
    });

  });

});