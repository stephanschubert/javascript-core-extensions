Screw.Unit(function() {

  describe("Array", function() {

    describe("first", function() {

      it("should return null if array is empty", function() {
        expect([].first()).to(equal, null);
      });

      it("should return the first element otherwise", function() {
        expect([1].first()).to(equal, 1);
        expect([3,5].first()).to(equal, 3);
      });

    });

    describe("last", function() {

      it("should return null if array is empty", function() {
        expect([].last()).to(equal, null);
      });

      it("should return the last element otherwise", function() {
        expect([1].last()).to(equal, 1);
        expect([3,5].last()).to(equal, 5);
      });

    });

  });

});