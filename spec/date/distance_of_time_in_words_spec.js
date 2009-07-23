Screw.Unit(function() {

  describe("Date", function() {
    
    describe("distance_of_time_in_words", function() {
      
      it("should return 'about 1 hour' for 50 minutes given", function() {
        var from = Time.now();
        var to   = from + (50).minutes();
        expect(Date.distance_of_time_in_words(from, to)).to(equal, "about 1 hour");
      });

    });

  });

});