Screw.Unit(function() {

  describe("Number", function() {

    describe("second(s)", function() {
      it("should just return the value", function() {
        expect((1).second()).to(equal, 1);
        expect((2).seconds()).to(equal, 2);
      });
    });

    describe("minute(s)", function() {
      it("should just return the seconds", function() {
        expect((1).minute()).to(equal, 60);
        expect((2).minutes()).to(equal, 2 * 60);
      });
    });

    describe("hour(s)", function() {
      it("should just return the seconds", function() {
        expect((1).hour()).to(equal, 60 * 60);
        expect((2).hours()).to(equal, 2 * 60 * 60);
      });
    });

    describe("day(s)", function() {
      it("should just return the seconds", function() {
        expect((1).day()).to(equal, 60 * 60 * 24);
        expect((2).days()).to(equal, 2 * 60 * 60 * 24);
      });
    });

    describe("week(s)", function() {
      it("should just return the seconds", function() {
        expect((1).week()).to(equal, 60 * 60 * 24 * 7);
        expect((2).weeks()).to(equal, 2 * 60 * 60 * 24 * 7);
      });
    });

    describe("month(s)", function() {
      it("should just return the seconds", function() {
        expect((1).month()).to(equal, 60 * 60 * 24 * 30);
        expect((2).months()).to(equal, 2 * 60 * 60 * 24 * 30);
      });
    });

    describe("year(s)", function() {
      it("should just return the seconds", function() {
        expect((1).year()).to(equal, 60 * 60 * 24 * 365);
        expect((2).years()).to(equal, 2 * 60 * 60 * 24 * 365);
      });
    });

  });

});