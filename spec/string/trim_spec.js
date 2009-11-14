Screw.Unit(function() {

  describe("String", function() {

    describe("trim", function () {

      it("should return an empty string if input is whitespace only", function() {
        expect("  ".trim()).to(equal, "");
      });

      it("should trim leading whitespace", function() {
        expect("  input".trim()).to(equal, "input");
      });

      it("should trim trailing whitespace", function() {
        expect("input  ".trim()).to(equal, "input");
      });

      it("should not touch whitespace inbetween", function() {
        expect("  a  b  ".trim()).to(equal, "a  b");
      });

    });

  });

});